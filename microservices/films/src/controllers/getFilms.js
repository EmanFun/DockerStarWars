const axios = require('axios');
module.exports=async (req, res)=>{
   const response = await axios.get("http://database:8004/Film")
    res.send(response.data)
}