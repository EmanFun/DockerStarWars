const store = require('../database');
module.exports = async (req, res, next)=>{
    const {model} = req.params;
    const newItem = req.body;
    const response = await store[model].insert(newItem);
    res.status(200).json(response);
}