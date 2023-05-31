const axios = require('axios');

module.exports = async (req, res, next)=>{
    const {id} = req.params;
    if(id){
        const response = await axios.get(`http://database:8004/Character/${id}`);
        res.send(response.data)

    }else{
        next()
    }
}