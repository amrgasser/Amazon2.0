import mongoose, { mongo } from "mongoose"

const variationSchema = new mongoose.Schema({
    color: String,
    size: String,
    sku: String,
    stock: Number,
    price: Number
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    subcategories: {
        type: Array
    },
    // gender: {
    //     type: String,
    //     enum: ['Male', 'Female', 'Unisex'],
    //     default: ['Choose gender']
    // },
    material: {
        type: String
    },
    variations: [{
        type: Object
    }]

}, {
    timestamps: true,
    strict: false
})

const Product = mongoose.model('Product', productSchema)

export default Product