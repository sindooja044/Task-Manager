
const express=require('express')
require('dotenv').config;
const cors=require('cors')
const db=require('./config/db')
const taskRoutes= require('./routes/taskRoutes')

const app=express();

app.use(cors())
app.use(express.json())

db();

const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})
app.use('/api/tasks', taskRoutes)