import User from "../models/User.js"

const index = async (req, res, next) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        res.json({
            message: error
        })
    }
}

const show = async (req, res, next) => {
    try {
        console.log(req.params.id)
        let userId = req.params.id
        const user = await User.findById(userId)
        res.json(user)
    } catch (error) {
        res.json({
            message: error
        })
    }
}

const store = async (req, res, next) => {
    try {
        let { firstName, lastName, email } = req.body
        let user = new User(
            {
                firstName,
                lastName,
                email
            }
        )
        user.save();
        res.json({
            message: "User Added Successfully",
            data: user
        })
    } catch (error) {
        res.status(424).json({
            message: "Could not add user"
        })
    }
}

const update = async (req, res, next) => {
    let userId = req.body.userId
    let updatedData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }
    try {
        let user = await User.findByIdAndUpdate(userId, { $set: updatedData })
        res.json({
            message: "User updated",
            user: user
        })
    } catch (error) {
        res.json({
            message: "Could not add user"
        })
    }
}

const destroy = async (req, res, next) => {
    let userId = req.params.id
    try {
        let user = await User.findOneAndRemove(userId)
        res.json({
            message: "Deleted Successfully",
            data: user
        })
    } catch (error) {
        res.status(404).json({
            message: "Could not delete employee"
        })
    }
}

export default {
    show,
    index,
    update,
    destroy,
    store
}
