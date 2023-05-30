const {Router} = require('express');
const controllers = require('../controllers')


const router= Router();

router.use("/films", controllers.get)
router.use("/films/:id", controllers.getById)
router.use("/newFilms", controllers.post)


module.exports = router;