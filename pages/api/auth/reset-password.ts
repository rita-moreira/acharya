import {connectDB} from "../../../utils/mongodb";
import User from "../../../models/user";
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

connectDB()

export default async (req: NextApiRequest,res: NextApiResponse) => {
    switch(req.method){
        case "PUT":
            await resetPassword(req, res)
            break;
    }
}

const resetPassword = async (req: NextApiRequest,res: NextApiResponse) => {
    try {
        const user = await User.findOne({resetPassword: req.body.token});
        if(!user){
            console.log("aqui")
            return res.status(400).json({
                error: "Ocorreu um erro, inválido!",
              });
        }

        const passwordHash = await bcrypt.hash(req.body.password.password, 12);

        user.resetPassword = "";
        user.password = passwordHash;
        await user.save();
        res.json({msg: "Password modificada com sucesso"});

   
    } catch (error) {
     
        return res.status(500).json({err: error.message})
    }
}