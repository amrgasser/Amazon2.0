import mongoose from "mongoose";

const SubCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})