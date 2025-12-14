require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')

app.use(express.urlencoded())
app.use(express.static('public'))
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const auth = require('./routers/auth')
const admin = require('./controllers/admin')
const { adminOnly, userOnly } = require('./middlewares/auth')

app.use('/',auth)
app.use('/admin',adminOnly)
app.use('/user',userOnly)

const PORT = 3000
app.listen(PORT,()=>{
    connectDB()
    console.log('app started!!')
})