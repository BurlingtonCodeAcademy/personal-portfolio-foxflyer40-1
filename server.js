const express = require('express')
const path = require('path')  // initialize path

const app = express() //app is the express server OBJECT
const port = process.env.PORT || 5000  // says operate on the environment variable coming in from heroku PORT or port 5000

// middleware 
// static file server - for security
app.use(express.static(path.resolve('./client/build')))  // path is specified as client build folder

// given a get request on ANY path do this request/response callback
app.get('*', (request, response) =>{
response.sendFile(path.resolve('./client/build/index.html'))
})  // this is where the response will be sent


// listen on the port defined above, then print that port to the console 
app.listen(port, () => { console.log(`Listening on port: ${port}`)})  
