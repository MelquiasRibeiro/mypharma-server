import express from 'express';
import UserController from "./controllers/userController";
import SessionController from "./controllers/sessionController";
import auth from './middlewares/auth';

const routes = express.Router();


routes.get("/",(_,res)=>{
    res.send({ok:true})
})

routes.post("/user",UserController.store)
routes.post("/session", SessionController.store);

routes.use(auth);



export default routes;