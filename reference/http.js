const http = require('http')

//create a server object
http.createServer((req, res) => {
    //write a response
    res.write('<h1>Hello World!</h1>')
    res.end()
}).listen(5000, () => console.log('Server is running on port 5000....'))