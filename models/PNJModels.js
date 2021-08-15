import mongoose from 'mongoose'

const PNJSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type: String,
        trim: true,
        lowercase: true,        
    },
    race:{
        type: String,
        trim: true,
        lowercase: true, 
    },
    clan:{
        type: String,
        trim: true,
        lowercase: true,
    },
    faction:{
        type: String,
        trim: true,
        lowercase: true,
    },

})

const PNJ = mongoose.model('PNJ', PNJSchema)

export default PNJ