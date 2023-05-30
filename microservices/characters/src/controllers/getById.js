const axios = require('axios');

module.exports = async (req, res)=>{
    const {id} = req.params;
    const data = await axios.get(`http://database:8004/Character/${id}`);
    res.send(data)
}