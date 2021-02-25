//
const http = require('http')

//default module from node 

const users = [{name:"sharath"},{name:"sachin"}]
// to create a server in machine u will use createServer method
const server = http.createServer(function(request, response){
// request is send through client
// response is send by server to client

// "/" path of the url 
    if (request.url =="/"){
        response.setHeader('content-type', 'text/html')
        response.end('<h2>hello world</h2> <ul><li>bangalore</li></ul>')
    }
/* else if (request.url == "/account/users"){
        condition the user has been login - 25 lines 
        again get the orders played by the current users - 8 codes
 }
 */
//node is a library which will enable javascript run at the server side 

 // in node js only one function 
    else if(request.url =="/contact"){
        response.end('hutti gold mines')
    }
    else if (request.url =="/about"){
        response.setHeader('content-type', 'application/json')
        response.end(JSON.stringify(users))
    }
    else if (request.url =="/users"){
        response.setHeader('content-type', 'application/json')
        response.end(JSON.stringify(users))
    }
    else{
        response.setHeader('content-type', 'text/html')
        response.end('<h1>page not found</h1>')
        }
});
console.log(server)
//server.listen two arguments , port, anonymous function

//control + c to stop the server
server.listen(3000, function(){
    console.log('server up. listening port', 3000)
})