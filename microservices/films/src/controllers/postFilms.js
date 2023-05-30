const axios = require('axios');

module.exports = async (req, res)=>{
    const newItem = req.body;
    const response = await axios.post("http://database:8004/Films", newItem)
    res.send(response)
     
}