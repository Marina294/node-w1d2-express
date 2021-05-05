// day1

// (function(require,exports,module,__filename,__dirname){
//   console.log(__filename)
// })()
// console.log('HELLO NODE')


// const Person = require('./person')
// const person1 = new Person('Ami', 62)
// person1.greeting()


// day2

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // // // console.log(req)


  if(req.url === '/' && req.method === 'GET'){
    //add a content type
    res.writeHead(200, { 'Content-Type':'text/html'})
    res.write('<html>')
    res.write('<head><title>Home page</title></head>')
    res.write('<body>')
    res.write('<h1>HOLA</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()
}

  // //build a file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? "index.html" : req.url)

  // //extension of the file
  let extname = path.extname(filePath)

  // //initial content type
  let contentType = "text/html"

  // //check for ext name and set the proper content type
  switch(extname){
    case ".js":
      contentType = "text/javascript"
      break
    case ".css":
      contentType = "text/css"
      break
    case ".json":
      contentType = "application/json"
      break
      }

  //check if the contentType is text/html but .html file extension
  if(contentType === "text/html" && extname === "") filePath += ".html"

  //Read file
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code === "ENOENT"){ //Error or no entity
        //display a 404 page
        // console.log(err)

        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          // if(err) throw err
          res.writeHead(404, { "Content-Type" : "text/html"})
          res.end(content, "utf8")
        })
      }else{
        //server error
        res.writeHead(500)
        res.end(`Server error: ${err.code}`)
      }
    }else{
      //success!!
      res.writeHead(200, { "Content-Type" : contentType})
      res.end(content, "utf8")
    }
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
