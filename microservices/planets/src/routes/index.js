const {Router} = require('express');
const controllers = require('../controllers');

const router = Router();

router.use("/Planets",controllers.get);
router.use("/Planets/",controllers.getbById);
router.use("/Planets", controllers.post);



module.exports = router;