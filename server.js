import express from 'express'
import dotenv from 'dotenv'
import connect from './db/index.js'
dotenv.config()
const app = express()

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})
connect()
