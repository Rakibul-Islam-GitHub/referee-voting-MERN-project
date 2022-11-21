import mongoose from 'mongoose'


const refereeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
    
    matches: {
        type: String,
        required: true
    },

    redcard: {
        type: String,
        required: true
    },

    yellowcard: {
        type: String,
        required: true
    },

    yellowcard: {
        type: String,
        required: true
    },
})

export default mongoose.model('Referee', refereeSchema)