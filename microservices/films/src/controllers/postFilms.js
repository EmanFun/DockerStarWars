const axios = require('axios');

module.exports = async (req, res)=>{
    const newItem = req.body;
    console.log(newItem)
    const response = await axios.post("http://database:8004/Film", newItem)
    res.send({message :'new film created'})
     
}