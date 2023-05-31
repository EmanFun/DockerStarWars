const {Router} = require('express');
const controllers = require('../controllers');

const router = Router();

router.get("/planets",controllers.get);
router.get("/planets/:id",controllers.getbById);
router.post("/newPlanets", controllers.post);



module.exports = router;