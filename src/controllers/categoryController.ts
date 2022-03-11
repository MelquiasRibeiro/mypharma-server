import { Request, Response } from 'express';
import Category from "../database/category";
import {v4 as uuid} from "uuid";

class CategoryController {
    async store(req:Request, res:Response){
        try {
          const {name,description}=req.body

          const newCategory = new Category({
            uuid:uuid(),
            name,
            description
          })

          const brand = await newCategory.save();

          res.status(201).json(brand);

        } catch (error) {
          res.status(400).json({error:`something wrong with your request: ${error}`})
        }
    }

    async index(_:Request, res:Response){
      try{
      const categories = await Category.find();   
      res.status(200).json(categories);
      } catch (error) {
        res.status(400).json({error:"something wrong with your request"})
      }
    }

    async update(req:Request, res:Response){
      try{
          const {body, params} = req;

           const updatedCategory = await Category.findByIdAndUpdate(params.id,{
           $set:body
         },{new:true});
        res.status(200).json(updatedCategory);
        } catch (error) {
          res.status(400).json({error:"something wrong with your request"})
        }
    }
    async delete(req:Request, res:Response){
      try{
        const {id} = req.params;
        try {
          await Category.findByIdAndDelete(id);
          res.status(200).json("category has been deleted...");
        } catch (error) {
          res.status(500).json(error);
        }
      res.status(204);
      } catch (error) {
        res.status(404).json(
          {
          erro:"category not found",
          error
      })
      }
    }


}

export default new CategoryController();
