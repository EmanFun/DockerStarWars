const axios = require('axios');

module.exports = async (req,res)=>{
    const newItem = req.body;
    const response = await axios.post("http://database:8004/Character",newItem);
    res.send(response)
}