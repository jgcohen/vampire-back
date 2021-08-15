import express from 'express' 
import passport from 'passport'
import { addCity, getCities, getCity, updateCity, deleteCity } from '../controllers/cityController.js'
import { addPNJ, getPNJS, getPNJ, updatePNJ, deletePNJ } from '../controllers/PNJController.js'
import {  getUser, getUsers } from '../controllers/userController.js'
import { getCharacter,getCharacters,updateCharacter, deleteCharacter,addCharacter  } from '../controllers/characterController.js'
import { catchErrors } from '../helpers.js'
import  jwt  from 'jsonwebtoken'
 
const router = express.Router()

router.get('/', (req, res) =>{
    res.send("Welcome to Chicago")
})

router.get('/city', catchErrors(getCities))
router.get('/city/:id', catchErrors(getCity))
router.post('/city', catchErrors(addCity))
router.patch('/city/:id', catchErrors(updateCity))
router.delete('/city/:id', catchErrors(deleteCity))

const maxAge = 3*24*60*60*1000
router.post('/signup', passport.authenticate('signup', {session: false}),
async(req,res,next)=>{
    res.json({
        message: 'Signup OK',
        user:  req.user
    })
})
router.post('/login',(req,res,next)=>{
    passport.authenticate('login',async(err,user)=>{
        try{
          if (err || !user){
              const error = new Error('error occured')
              return next(error)
          }  
          req.login(user,{session: false}, async error =>{
              if(error)return next(error)
              const body = {_id:user._id, email: user.email}
              const token = jwt.sign({user:body},'orihulk17',{expiresIn: maxAge})  
              res.cookie('jwt',token,{httpOnly: true, maxAge:maxAge})
              res.json({token, body})
              res.send({token,body})
          })
        }catch(error){
            return next (error)
        }
    })(req,res,next)
})

router.get('/pnj', catchErrors(getPNJS))
router.get('/pnj/:id', catchErrors(getPNJ))
router.post('/pnj', catchErrors(addPNJ))
router.patch('/pnj/:id', catchErrors(updatePNJ))
router.delete('/pnj/:id', catchErrors(deletePNJ))

router.get('/character', catchErrors(getCharacters))
router.get('/character/:id', catchErrors(getCharacter))
router.post('/character', catchErrors(addCharacter))
router.patch('/character/:id', catchErrors(updateCharacter))
// router.delete('/character/:id', catchErrors(deleteCharacter))


router.get('/user/:id', catchErrors(getUser))
router.get('/user', catchErrors(getUsers))

export default router 