import express from "express";
import APIController from '../controller/APIController';

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUser);// method get read data
    router.post('/create-user', APIController.createNewUser); // method post new data
    router.put('/update-user', APIController.updateUser);//method put  updatr data
    router.delete('/delete-user/:id', APIController.deleteUser);//method put  updatr data
    return app.use('/api/v1/',router)
}

export default initAPIRoute;