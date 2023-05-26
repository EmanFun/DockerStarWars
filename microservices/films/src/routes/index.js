const {Router} = require('express');
const controllers = require('../controllers')


const routes = Router();

routes.use("/films", controllers.get)


module.exports = routes;