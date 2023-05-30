const {Router} = require('express');
const controllers = require('../controllers');

const router = Router();

router.use("/planets",controllers.get);
router.use("/planets/",controllers.getbById);
router.use("/planets", controllers.post);



module.exports = router;