require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')
const cookiepparser = require('cookie-parser')

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.urlencoded())
app.use(cookiepparser())
app.use(express.static('public'))
app.use(express.json())


const auth = require('./routers/auth')
const admin = require('./routers/admin')
const user = require('./routers/user')
const { adminOnly, userOnly } = require('./middlewares/auth')

app.use('/',auth)
app.use('/admin',adminOnly,admin)
app.use('/user',userOnly,user)

const PORT = 3000
app.listen(PORT,()=>{
    connectDB()
    console.log('app started!!')
})