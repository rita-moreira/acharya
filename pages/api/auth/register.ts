import {connectDB} from "../../../utils/mongodb";
import User from "../../../models/user";
import {validRegister} from "../../../utils/validRegister";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from 'next'
import slugify from "slugify";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();

connectDB()

export default async (req: NextApiRequest,res: NextApiResponse) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req: NextApiRequest,res: NextApiResponse) => {
    try {
        const {email, person, password, role} = req.body;

        const errMsg = validRegister(email, person, password, role);

        if(errMsg){
            return res.status(400).json({
                err: errMsg,
              });
        }

        if(await User.findOne({ email: req.body.email })){
            return res.status(400).json({
                error: "Já existe um utilizador com este email!",
              });
        }
        if(await User.findOne({ person: req.body.person })){
            return res.status(400).json({
                error: "Já existe um utilizador com este Nome e Apelido!",
              });
        }



        const passwordHash = await bcrypt.hash(password, 12);
        const slug = slugify(person);
        const verifyEmail = crypto.randomBytes(64).toString("hex");
        const newClient = new User({email, person, password: passwordHash, slug, role, verifyEmail: verifyEmail})
      
    
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL, 
              pass: process.env.PASSWORD, 
            },
          });
      

         // send mail with defined transport object
  let mailOptions = {
    from: process.env.EMAIL, // sender address
    to: email, // list of receivers
    subject: "Welcome to Acharya", // Subject line
    // text: "Hello world?", // plain text body
    html: `<h1>Bem vind@ ao Acharya</h1>
            <h3>Obrigada por ter feito o seu registo ${person}<h3>
            <a href="http://${req.headers.host}/verify-email?token=${verifyEmail}">Verificar email</a>
    `, // html body
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  await newClient.save()
  res.json({msg: "Cliente registado com sucesso, por favor verifica o teu mail para confirmar a tua conta"});

    } catch (error) {
        return res.status(500).json({err: error.message})

    }

}