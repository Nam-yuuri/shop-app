import mongoose from 'mongoose'

const brandSchema = mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    img: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})



const BrandMessage = mongoose.model('BrandMessage', brandSchema)

export default BrandMessage;