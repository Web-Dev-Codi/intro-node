import {Router} from 'express'
import { getAllPosts, createPost } from '../controllers/postsController.js'
import { verifyUser } from '../middlewares/loginVerification.js'

const postsRouter = Router()


postsRouter.get('/posts', verifyUser, getAllPosts )
postsRouter.post('/posts', createPost)



export default postsRouter