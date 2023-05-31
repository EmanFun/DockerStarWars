const axios = require('axios');
module.exports =  async (req, res )=>{
    const {id} = req.params;
    const response = await axios.get(`http://database:8004/Planet/${id}`);
    res.send(response.data);
}