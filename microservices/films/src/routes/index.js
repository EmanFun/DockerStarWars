const {Router} = require('express');
const controllers = require('../controllers')


const router= Router();

router.use("/films", controllers.get)
router.use("/films/", controllers.getById)
router.use("/films", controllers.post)


module.exports = router;