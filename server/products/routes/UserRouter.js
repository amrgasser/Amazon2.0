import express from "express"
import userService from '../auth/services/UserService.js'

const userRouter = express.Router()

userRouter.get('/', userService.index)
userRouter.get('/show/:id', userService.show)
userRouter.patch('/update', userService.update)
userRouter.post('/', userService.store)
userRouter.post('/destroy/:id', userService.destroy)

export default userRouter