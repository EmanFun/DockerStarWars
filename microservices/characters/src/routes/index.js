const {Router} = require('express')
const controller = require('../controllers');



const router = Router();


router.use("/characters",controller.get)
router.use("/characters/",controller.getbyId)
router.use("/characters",controller.post)

module.exports= router;