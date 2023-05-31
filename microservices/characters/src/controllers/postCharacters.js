const axios = require('axios');

module.exports = async (req,res)=>{
    const newItem = req.body;
    if(newItem){
        const response = await axios.post("http://database:8004/Character",newItem);
        res.send({message : "new character created"})
    }
}