import {connectDB} from "../../../utils/mongodb";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from 'next'
import { validForgotPassword } from "../../../utils/validForgotPassword";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();

connectDB()

export default async (req: NextApiRequest,res: NextApiResponse) => {
    switch(req.method){
        case "PUT":
            await forgotPassword(req, res)
            break;
    }
}

const forgotPassword = async (req: NextApiRequest,res: NextApiResponse) => {
    try {
        const {email} = req.body;
        console.log(email)
        const errMsg = validForgotPassword(email);

        if(errMsg){
            return res.status(400).json({
                err: errMsg,
              });
        }
        const user =  await User.findOne({email: email});

        if(!user){
            return res.status(400).json({
                error: "Não existe um utilizador com este email",
              });
        }
        const resetPassword = crypto.randomBytes(64).toString("hex");
        user.resetPassword = resetPassword;
        await user.save();

   

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
          to: user.email, // list of receivers
          subject: "Recuperar palavra-passe", // Subject line
          // text: "Hello world?", // plain text body
            html: `<h1>Olá ${user.person}</h1>
                <h3>Carregue no link abaixo para recuperar a palavra-passe<h3>
                <a href="http://${req.headers.host}/reset-password/${resetPassword}">Recuperar palavra-passe</a>
                `, // html body
        };
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
        
        res.json({msg: "Enviamos um mail para poder recuperar a palavra-passe!"});

    } catch (error) {
        return res.status(500).json({err: error.message})

    }

}