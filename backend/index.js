require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')
const cookiepparser = require('cookie-parser')
const connectCloudinary = require('./config/cloudinary')
const fileUpload = require('express-fileupload')

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.urlencoded())
app.use(cookiepparser())
app.use(express.static('public'))
app.use(express.json())
app.use(fileUpload(
    {
    useTempFiles : true,
    tempFileDir : '/tmp/'
}
));


const auth = require('./routers/auth')
const admin = require('./routers/admin')
const user = require('./routers/user')
const public = require('./routers/public')
const { adminOnly, userOnly } = require('./middlewares/auth')

app.use('/',auth)
app.use('/public',public)
app.use('/admin',adminOnly,admin)
app.use('/user',userOnly,user)

const PORT = 3000
app.listen(PORT,()=>{
    connectDB()
    connectCloudinary()
    console.log('app started!!')
})