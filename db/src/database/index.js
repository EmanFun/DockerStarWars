const mongoose = require('mongoose');
const {MONGO_URI} = require('../config/envs');

const conn = mongoose.createConnection(`mongodb+srv://iflambda:PjBE5W0ZhoUUcCIP@dball.qv1pl7m.mongodb.net/starWars`);

const Character = conn.model("Character", require('./schemas/characterSchema'));
const Film = conn.model("Film",require('./schemas/FilmSchema'));
//Consultas 
//Character.find().populate('films', ["_id","title"]).then((res)=> console.log(res[0].films))


module.exports= {
    Character: conn.model("Character", require('./schemas/characterSchema')),
    Film: conn.model("Film",require('./schemas/FilmSchema')),
    Planet: conn.model('Planet',require('./schemas/PlanetSchema')),
}