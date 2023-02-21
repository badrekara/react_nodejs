const express = require('express')
const app = express()

app.get('/',(req,res)=>{
        res.send('<h2> Bonjour Express </h2>')
})

//----------------Api---------------------
app.use(express.json())
const product_routes = require('./routes/productRoutes')
const cors = require('cors')
app.use(cors({
        origin:'http://localhost:3000',
        methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS'
}))
app.use('/api/v1',product_routes)

module.exports = app
