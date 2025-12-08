require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')

app.use(express.urlencoded())
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.get('/data',)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    connectDB()
    console.log('app started!!')
})