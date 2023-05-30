const {Router} = require('express')
const controller = require('../controllers');



const router = Router();


router.use("/characters",controller.get)
router.use("/characters/:id",controller.getbyId)
router.use("/newCharacter",controller.post)

module.exports= router;