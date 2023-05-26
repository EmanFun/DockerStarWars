const {Router} = require('express')
const controller = require('../controllers');



const routes = Router();


routes.use("/characters",controller.get)



module.exports= routes;