import express from 'express';
import UserController from "./controllers/userController";
import SessionController from "./controllers/sessionController";
import BrandController from "./controllers/brandController";

import auth from './middlewares/auth';

const routes = express.Router();


routes.get("/",(_,res)=>{
    res.send({ok:true})
})

routes.post("/user",UserController.store)
routes.post("/session", SessionController.store);

routes.use(auth);


routes.post("/brand", BrandController.store);
routes.get("/brand", BrandController.index);
routes.put("/brand/:id", BrandController.update);
routes.delete("/brand/:id", BrandController.delete);




export default routes;