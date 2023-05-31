const {Router} = require('express');
const controllers = require('../controllers')


const router= Router();

router.get("/films", controllers.get)
router.get("/films/:id", controllers.getById)
router.post("/newFilms", controllers.post)


module.exports = router;