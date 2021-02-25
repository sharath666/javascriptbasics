const http = require('http')
const users = [
    {id:1,name:"sharath"},
    {id:2, name:"sachin"}
]
//http module is an in built module present inside node 

const server = http.createServer(function(request, response){
    if (request.url =="/"){
        response.end('welcome to site')
    }
    else if (request.url =="/contact"){
        response.end('hutti gold mines')
    }
})

server.listen(3000, function(){
    console.log('server up. listening port', 3000)
})