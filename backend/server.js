const app = require('./app')
const mongoose=require('mongoose')
const dotenv = require ('dotenv')

dotenv.config({path: './backend/config/config.env'})
const PORT = process.env.MYPORT
const DB=process.env.db_con
mongoose.connect(DB,()=>console.log('Database connected'))
app.listen(PORT,()=>console.log(`server is runing on ${PORT}`))