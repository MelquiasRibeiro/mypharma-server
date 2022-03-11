import { Request, Response } from 'express';
import Brand from "../database/brand";
import {v4 as uuid} from "uuid";

class BrandController {
    async store(req:Request, res:Response){
        try {
          const {name,description}=req.body

          const newBrand = new Brand({
            uuid:uuid(),
            name,
            description
          })

          const brand = await newBrand.save();

          res.status(201).json(brand);

        } catch (error) {
          res.status(400).json({error:`something wrong with your request: ${error}`})
        }
    }

    async index(_:Request, res:Response){
      try{
      const brands = await Brand.find();   
      res.status(200).json(brands);
      } catch (error) {
        res.status(400).json({error:"something wrong with your request"})
      }
    }

    async update(req:Request, res:Response){
      try{
          const {body, params} = req;

          console.log(params.id)
           const updatedBrand = await Brand.findByIdAndUpdate(params.id,{
           $set:body
         },{new:true});
        res.status(200).json(updatedBrand);
        } catch (error) {
          res.status(400).json({error:"something wrong with your request"})
        }
    }
    async delete(req:Request, res:Response){
      try{
        const {id} = req.params;
        try {
          await Brand.findByIdAndDelete(id);
          res.status(200).json("Brand has been deleted...");
        } catch (error) {
          res.status(500).json(error);
        }
      res.status(204);
      } catch (error) {
        res.status(404).json(
          {
          erro:"Brand not found",
          error
      })
      }
    }


}

export default new BrandController();
