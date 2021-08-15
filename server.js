import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import routes from  './routes/route.js'
import privateRoutes from './routes/privateRoutes.js'
import passport from 'passport'
import dotenv from 'dotenv'
import { checkUser, requiereAuth} from './middleware/auth.middleware.js'
import cors from 'cors'
import './auth/auth.js'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()



app.use(cookieParser())
app.use(express.json())
app.use(cors());
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false
 })

 app.get('*',checkUser);
 app.get('/jwtid',requiereAuth,(req,res)=>{
     res.status(200).send(res.locals.user._id)
 })

 app.use('/private', passport.authenticate('jwt',{session:false}), 
 privateRoutes)
app.use(routes)

app.listen(PORT,()=> {
    console.log(`le serveur est lancé sur le port : ${PORT}`)
})