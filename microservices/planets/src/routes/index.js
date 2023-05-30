const {Router} = require('express');
const controllers = require('../controllers');

const router = Router();

router.use("/planets",controllers.get);
router.use("/planets/:id",controllers.getbById);
router.use("/newPlanets", controllers.post);



module.exports = router;