const express = require('express')
const path = require('path')

const shopRouters = require('./routes/shop')

const app = express()

// app.get('/', (req,res) => {
//      res.send('<h1>Hello Express</h1>')
//     // res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

//middlewares
// app.use((req, res, next) => {
//     console.log('In the first middleware')
//     next() //allows the request to continue to the next middleware
// })

// app.use('/hello', (req,res,next) => {
//     console.log('In the second middleware')
//     res.send('<h1>Hello from Express.js</h1>')
// })

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

//to parse incoming form data --body parser
app.use(express.urlencoded({ extended: false }))

app.use('/add-products', (req,res) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title" />
            <button type="submit">SEND</button>
        </form>
    `)
})

app.use('/product', (req,res) => {
    console.log(req.body)
    res.redirect('/')
})

// route
app.use(shopRouters)

//catch-all-middleware ------ 404

app.get('/calculate',function(req,res){
	res.send("Example GET");
});

app.use(function (req,res,next){
	res.status(404).send('Unable to find the requested resource!');
});

app.listen(8080);



const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))