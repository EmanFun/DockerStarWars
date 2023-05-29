const {Router} = require('express');
const store = require('../database');
const {validateModel} = require('../middlewares');

const router = Router();


//examples

/* router.get('/character', async (req, res)=>{
    const response = await Character.list()
    res.status(200).json(response)
})

router.get('/films', async (req, res)=>{
    const response = await Film.list()
    res.status(200).json(response)
}) */


//example unique

router.use('/:model', validateModel,async (req, res)=>{
    const {model} = req.params;
    const response = await store[model].list();
    res.status(200).json(response)
})
//
router.use('/:model/:id', validateModel, async (req, res)=>{
    const {model, id} = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
})


module.exports = router;