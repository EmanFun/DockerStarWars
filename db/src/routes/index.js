const {Router} = require('express');

const {validateModel} = require('../middlewares');
const controllers = require('../controller')

const router = Router();



//

router.get('/:model', validateModel, controllers.list)
router.get('/:model/:id', validateModel, controllers.get)
router.post('/:model',validateModel, controllers.insert)

module.exports = router;