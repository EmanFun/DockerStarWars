const server = require('./src');

const {Character} = require('./src/database');

Character.find()
    .populate("homeworld",["id", "name"])
    .populate('films',)
    .then((res)=> console.log(res))

server.listen(8004,()=>{
    console.log('server listening on port 8004');
})