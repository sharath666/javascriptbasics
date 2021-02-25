const express = require('express')
const app = express()
//console.log(app)
const port = 3000
//Routes Handler
app.get('/', function(request, response){
    response.send('<h2>welcome to website</h2>')
    console.log('home')
});

app.get('/users',function(request, response){
    response.send([{
        id:1, name:"sharath"},
        {id:2, name:"rohit"}
    ])
    console.log('users')
});


app.listen(port, function(){
    //2 argument port and anonymous function
    console.log('server up... listening on port',3000)
})



