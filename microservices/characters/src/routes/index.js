const {Router} = require('express')
const controller = require('../controllers');



const router = Router();


router.use("/Characters",controller.get)
router.use("/Characters/",controller.getbyId)
router.use("/Characters",controller.post)

module.exports= router;