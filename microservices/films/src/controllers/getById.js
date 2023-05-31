const axios = require('axios');

module.exports = async (req, res)=>{
    const {id} = req.params;
    console.log(id)
    const response = await axios.get(`http://database:8004/Film/${id}`);
    res.send(response.data)
}