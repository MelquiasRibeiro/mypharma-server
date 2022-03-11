import { Request, Response } from 'express';
import Product from "../database/product";
import {v4 as uuid} from "uuid";

class CategoryController {
    async store(req:Request, res:Response){
        try {
          const {  name,
            description,
            price,
            quantity,
            brand,
            category,

          }=req.body

          const newProduct = new Product({
            uuid:uuid(),
            name,
            description,
            price,
            quantity,
            brand,
            category,
          })

          const product = await newProduct.save();

          res.status(201).json(product);

        } catch (error) {
          res.status(400).json({error:`something wrong with your request: ${error}`})
        }
    }

    async index(_:Request, res:Response){
      try{
      const product = await Product.find().populate("category").populate("brand");   
      res.status(200).json(product);
      } catch (error) {
        res.status(400).json({error:"something wrong with your request"})
      }
    }

    async update(req:Request, res:Response){
      try{
          const {body, params} = req;

           const updatedProduct = await Product.findByIdAndUpdate(params.id,{
           $set:body
         },{new:true});
        res.status(200).json(updatedProduct);
        } catch (error) {
          res.status(400).json({error:"something wrong with your request"})
        }
    }
    async delete(req:Request, res:Response){
      try{
        const {id} = req.params;
        try {
          await Product.findByIdAndDelete(id);
          res.status(200).json("Product has been deleted...");
        } catch (error) {
          res.status(500).json(error);
        }
      res.status(204);
      } catch (error) {
        res.status(404).json(
          {
          erro:"Product not found",
          error
      })
      }
    }


}

export default new CategoryController();
