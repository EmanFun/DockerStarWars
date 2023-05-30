const axios = require('axios');

module.exports = async (req, res)=>{
    const newItem = req.body;
    const response = await axios.post("http://database:8004/Planets",newItem);
    res.send(response)
}