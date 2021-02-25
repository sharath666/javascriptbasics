//axios
const axios = require('axios')
const url = "https://jsonplaceholder.typicode.com/users/1"


axios.get(url).then(function(response){
    console.log(response.data)
})


