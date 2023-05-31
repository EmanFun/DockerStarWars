const store = require('../database');
module.exports =async (req, res, next)=>{
    const {model} = req.params;

    const response = await store[model].list();
    res.status(200).json(response)

}