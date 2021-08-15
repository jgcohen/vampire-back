import mongoose from 'mongoose'

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    description:{
        type: String,
        trim: true,
        lowercase: true,
    }
})

const City = mongoose.model('City', CitySchema)

export default City 