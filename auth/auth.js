import passport from 'passport'
import { Strategy } from 'passport-local'
import UserModel from '../models/userModel.js'
import JWT from 'passport-jwt'
const { Strategy: JWTStrategy, ExtractJwt} = JWT

 passport.use('signup',
 new Strategy({
     usernameField: 'email',
     passwordField: 'password',
     passReqToCallback:true
 },
 
async(req,email,password,done)=> {
         try {
            const user = await UserModel.create({
                email: email,
                password:password,
                pseudo: req.body.pseudo,
                characters:[]},
                )
            return done (null, user)
         }catch(error){
           return done(error)
         }
     }
 ))

 passport.use('login',
 new Strategy({
     usernameField: 'email',
     passwordField: 'password',
 },
 
async(email,password,done)=> {
         try {
            const user = await UserModel.findOne({email})
            if(!user){
                return done(null,false,{message: 'User or password not valid'})
            }
            const validate = await user.isValidPassword(password)

            if (!validate){
                return done(null,false,{message: 'User or password not valid'})
            }

            return done(null,user,{message: 'Connected'})
         }catch(error){
           return done(error)
         }
     }
 ))

 passport.use(
     new JWTStrategy({
         secretOrKey:'orihulk17',
         jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token')
     },
     async(token,done)=>{
         try{
            return done(null,token.user)
         }catch(error){
            done(error)
         }
     })
 )
 
 export default passport