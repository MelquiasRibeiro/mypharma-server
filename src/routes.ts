import express from 'express';
import UserController from "./controllers/userController";
import SessionController from "./controllers/sessionController";
import BrandController from "./controllers/brandController";
import CategoryController from "./controllers/categoryController";
import ProducController from "./controllers/producController";

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

routes.post("/caregory", CategoryController.store);
routes.get("/caregory", CategoryController.index);
routes.put("/caregory/:id", CategoryController.update);
routes.delete("/caregory/:id", CategoryController.delete);


routes.post("/product", ProducController.store);
routes.get("/product", ProducController.index);
routes.put("/product/:id", ProducController.update);
routes.delete("/product/:id", ProducController.delete);






export default routes;