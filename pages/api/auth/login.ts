import {connectDB} from "../../../utils/mongodb";
import User from "../../../models/user";
import {validLogin} from "../../../utils/validLogin";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from 'next'
import {createAcessToken,createRefreshToken} from "../../../utils/generateToken";
import dotenv from "dotenv";
dotenv.config();

connectDB()

export default async (req: NextApiRequest,res: NextApiResponse) => {
    switch(req.method){
        case "POST":
            await login(req, res)
            break;
    }
}

const login = async (req: NextApiRequest,res: NextApiResponse) => {
    try {
        const {email, password} = req.body;

        const errMsg = validLogin(email, password);

        if(errMsg){
            return res.status(400).json({
                err: errMsg,
              });
        }

        const user =  await User.findOne({ email })
        if(!user){
            return res.status(400).json({
                error: "Não existe um utilizador com este email",
              });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                error: "O email e a palavra-passe não coincidem",
              });
        }

        if(user.status === false){
            return res.status(400).json({
                error: "Por favor confirme o seu email antes de iniciar sessão!",
              });
        }

        const access_token = createAcessToken({id: user._id})
        const refresh_token = createRefreshToken({id: user._id})

        
        res.json({
            msg: "Iniciou sessão com sucesso",
            refresh_token,
            access_token,
            user: {
                email: user.email,
                person: user.person,
                slug: user.slug,
                role: user.role,
                photo: user.photo,
                nif: user.nif,
                address: user.address,
                mobile: user.mobile
            }
        
        });

    } catch (error) {
        return res.status(500).json({err: error.message})

    }

}