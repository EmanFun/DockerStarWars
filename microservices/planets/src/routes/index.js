const {Router} = require('express');
const controllers = require('../controllers');

const routes = Router();

routes.use("/planets",controllers.get);



module.exports = routes;