import {connectDB} from "../../../utils/mongodb";
import User from "../../../models/user";
import { NextApiRequest, NextApiResponse } from 'next'

import dotenv from "dotenv";
dotenv.config();

connectDB()

export default async (req: NextApiRequest,res: NextApiResponse) => {
    switch(req.method){
        case "PUT":
            await verifyEmail(req, res)
            break;
    }
}

const verifyEmail = async (req: NextApiRequest,res: NextApiResponse) => {
    try {
       
        const user = await User.findOne({verifyEmail: req.body.verifyEmail});
        console.log(user)
        if(!user){
            return res.status(400).json({
                error: "Ocorreu um erro, inválido!",
              });
        }


        user.verifyEmail = "";
        user.status = true;
        await user.save();
        res.json({msg: "Conta activada"});

   
    } catch (error) {
        return res.status(500).json({err: error.message})
    }
}