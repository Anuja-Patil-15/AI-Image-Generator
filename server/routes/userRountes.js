
import express from 'express'
import {registerUser,loginUser, userCredit, paymentRazorpay,verifyRazorpay} from '../controllers/userController.js'
import userAuth from '../middleWares/auth.js'

const userRouter =express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/credits',userAuth,userCredit)
userRouter.post('/pay-razor',userAuth,paymentRazorpay)
userRouter.post('/verifyRazorpay', verifyRazorpay) // ✅ use lowercase

export default userRouter

//http://localhost:4000/api/user/register
//http://localhost:4000/api/user/login