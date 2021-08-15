import express from 'express'

const router = express.Router()

router.get('/secret',(req,res)=>{
    res.json({
        message: 'Welcome on SchreckNet',
        user: req.user,
        token: req.query.token
    })
})

export default router