const {Router} = require('express')
const controller = require('../controllers');



const router = Router();


router.get("/characters",controller.get)
router.get("/characters/:id",controller.getbyId)
router.post("/newCharacter",controller.post)

module.exports= router;