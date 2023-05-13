import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    iconImage: {
        type: String,
        required: true
    }
}, {
    strict: false
})

const Category = mongoose.model("Category", categorySchema)

export default Category