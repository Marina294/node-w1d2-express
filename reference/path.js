const path = require('path')

//basename
console.log('basename: ', path.basename(__filename))

//directory
console.log('directory: ', path.dirname(__filename)) //same as calling __dirname only

//file extension
console.log('filext: ', path.extname(__filename))

//creating a path object
console.log('path obj: ', path.parse(__filename))

//Concat paths
console.log('path concat: ', path.join(__dirname, 'test', 'hello.html'))

