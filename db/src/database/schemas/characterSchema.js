const {Schema}= require('mongoose');


const characterSchema = new Schema({
    
_id: Number,
name: String,
height: Number,
mass: Number, 
hair_color: String,
skin_color: String,
eye_color: String,
birth_year: String,
gender: {
    type: String,
    enum: ['male', 'female', 'n/a']
},
homeworld: {type: String, ref: "Planet"}, //Referencia a planets
films: [{type: String,ref: "Film"}], //array de referencias de peliculas
});
//metodos personalizados del schema
characterSchema.statics.list = async function(){
    return await this.find()
        .populate("homeworld",["_id","name"])
        .populate("films",["_id","title"])
};

characterSchema.statics.get= async function(id){
    return await this.findById(id)
        .populate("homeworld",["_id","name"])
        .populate("films",["_id","title"])
}

characterSchema.statics.insert = async function (character){
    return await this.create(character)
}

module.exports = characterSchema;