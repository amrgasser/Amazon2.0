import { ConnectionPoolMonitoringEvent } from "mongodb";
import mongoose from "mongoose"

const TshirtSchema = new mongoose.Schema({
    name: String,
    description: String,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Unisex'],
        default: ['Choose gender']
    },
    about: {
        material: {
            type: String
        }
    },
    colorsImages: [{
        color: String,
        images: [{ type: String }]
    }],
    variations: [{
        sku: String,
        color: {
            type: String
        },
        size: {
            type: String,
            // ref: this.sizes
        },
        price: Number
    }]

}, {
    timestamps: true,
    strict: false
})
const Tshirt = mongoose.model('Product', TshirtSchema);

export default Tshirt;