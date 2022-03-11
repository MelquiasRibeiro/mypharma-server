import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import User from "../database/user";
import {v4 as uuid} from "uuid";

class UserController {
    async store(req:Request, res:Response){
        try {
          const {name,email,password}=req.body
          
          const salt = await bcrypt.genSalt(10);
          const hashedPass = await bcrypt.hash(password, salt);
          
          const newUser = new User({
            uuid:uuid(),
            name,
            email,
            password: hashedPass,
          })

          const user = await newUser.save();

          res.status(201).json(user);

        } catch (error) {
          res.status(400).json({error:`something wrong with your request ${error}`})
        }
    }
}

export default new UserController();
