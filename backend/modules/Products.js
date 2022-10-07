import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name : {
        type: String,

    },
    description: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const ProductMessage = mongoose.model('ProductMessage', productSchema)

export default ProductMessage;