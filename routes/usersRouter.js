import {Router} from 'express'
import { getAllUsers } from '../controllers/usersController.js'
const userRouter = Router()


userRouter.get('/users', getAllUsers )

userRouter.get('/users/:id', async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await Users.findById(id)
        return res.status(200).json(userByID)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }

})


userRouter.post('/users', async (req, res) => {
    const {first_name, last_name, passion} = req.body
    try{
        const newUser = await Users.create(req.body)
        return res.status(201).json(newUser)
    }   
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }
})


export default userRouter