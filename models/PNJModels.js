import mongoose from 'mongoose'

const PNJSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type: String,
        trim: true,
               
    },
    race:{
        type: String,
        trim: true,
         
    },
    clan:{
        type: String,
        trim: true,
        
    },
    faction:{
        type: String,
        trim: true,
        
    },

})

const PNJ = mongoose.model('PNJ', PNJSchema)

export default PNJ