const store = require('../database');
module.exports = async (req, res, next)=>{

    const {model, id} = req.params;
    if(id){
        const response = await store[model].get(id);
        res.status(200).json(response);    
    }
}