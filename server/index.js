import  express  from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRote from './routes/auth.js'
import manufacturesRote from './routes/manufactures.js'
import ordersRote from './routes/orders.js'

const app = express()
dotenv.config()

// Constants

const PORT = process.env.PORT || 5000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middleware

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))


//Routes
app.use('/api/auth', authRote)
app.use('/api/manufactures', manufacturesRote)
app.use('/api/orders', ordersRote)

async function start() {
  try{
    // mortaleest
    
    await mongoose.connect(`mongodb+srv://mortaleest:${DB_PASSWORD}@mortaleest.jgl1wiz.mongodb.net/?retryWrites=true&w=majority`)
    // await mongoose.connect(`mongodb+srv://mortaleest:${DB_PASSWORD}@mortaleest.jgl1wiz.mongodb.net/?retryWrites=true&w=majority`)
    // await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hvr4gil.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
  }
  catch (error){
    console.log(error);
  }
}


start()