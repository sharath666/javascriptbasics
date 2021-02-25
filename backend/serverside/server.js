const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())
// return type of the express function 
const port = 3000
// express is a package which is build on top of node
const users = [
    {id:1,name:"sharath"},
    {id:2, name:"sachin"}
]
console.log(app)

let students = [
    {id:1,name:"anusha",place:"davangere"},
    {id:2,name:"rohit", place:"palakad"},
    {id:3,name:"sravan", place:"kodumur"}
]   

const headerTag = '<h1> Hello World </h1>'


app.get('/', function(request, response){
    response.send('Welcome to our website')
})

app.get('/about', function(request, response){
    response.send('<h2> About us page</h2>')
    console.log(response)
})

app.get('/users', function(request, response){
    response.send(users)
    console.log(
         response.send(users))
    console.log(typeof users)
})
// to display all the students 
app.get('/students', function(request, response){
    response.send(students) 

});
//read

app.post('/students', function(req, res){
       const data = req.body
       students.push(data)
       res.send({
           student:data,
           notice:"student has been inserted successfully"
       })
});
//create

//any incoming data coming from the client to server it will be req.body

// app.put('/students/:id', function(req, res){     

// });
//update

// app.delete('/students/:id', function(req, res){
//     res.send(`delete student with id ${req.params.id}`)
// })

app.delete('/students/:id', function(req,res){
    let id = req.params.id
    students = students.filter(function(student){
        return student.id != id
    })
    res.send(students)
})

//delete


app.get('/students/:id', function(request, response){
        console.log('the incoming method', request.url )
        console.log('The  request params', request.params)
        console.log('the request ip address', request.ip)
            console.log(request.params.id)
     let student =  students.find(function(student){
            return student.id == request.params.id
        })

        if (student){
        response.send(student)
        }
        else{
            response.send(`The Student  with id ${request.params.id} not found `)
        }
    

});

app.put('/students/:id', function(req,res){
        let id = req.params.id
        let body = req.body

        let student = students.find(function(student){
            return student.id ==id
        })
        if (student){
            student.name = body.name
            student.place = body.place
            res.send({student, notice:"student updated sucessfully"})
        }
        else{
            res.send({message:`Student Not Found with id ${id}`})
        }
});





app.get('/head', function(request, response){
    response.send(headerTag)
})

app.listen(port, function(){
    console.log('server up... listening on port',3000)
})


// the request is send through client (chrome browser) to the server(127.0.0.1)
// the server is responsible for handling request

//when const is declared on the [] you can add and remove elements