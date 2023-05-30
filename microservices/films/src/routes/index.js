const {Router} = require('express');
const controllers = require('../controllers')


const router= Router();

router.use("/Films", controllers.get)
router.use("/Films/", controllers.getById)
router.use("/Films", controllers.post)


module.exports = router;