import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userId',homeController.getDetaiPage);
    router.post('/create-new-user', homeController.creatNewUser);
    router.post('/delete-user', homeController.creatDeleteUser);
    router.get('/edit-user/:id', homeController.creatEditUser);
    router.post('/update-user', homeController.updateUser);
    // app.get('/', (req, res) => {
    //     res.render('index.ejs');
    // })

    app.get('/about', (req, res) => {
        res.send('Phạm Văn Minh')
    })

    return app.use('/',router)
}

export default initWebRoute;