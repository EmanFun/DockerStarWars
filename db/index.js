const server = require('./src');

const {Character, Film} = require('./src/database');


//Character.list().then((res)=> console.log(res))
//Character.get(1).then((res)=> console.log(res))

/* Character.insert({
    _id:'200',
    name: 'eman',
    birth_year: '1995',
}).then(res=> console.log(res))
 */
//Film.list().then((res)=>console.log(res));

/* Film.insertMany({
    _id: 53,
    title: 'emanfun',
    director: 'igna',
}).then(res=> console.log(res)) */

server.listen(8004,()=>{
    console.log('server listening on port 8004');
})