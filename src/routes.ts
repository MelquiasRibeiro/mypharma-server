import express from 'express';
import UserController from "./controllers/UserController";

const routes = express.Router();


routes.get("/",(_,res)=>{
    res.send({ok:true})
})

routes.post("/user",UserController.store)


export default routes;