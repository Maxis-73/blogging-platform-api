import { Router } from "express"
import productController from "../controllers/postController"
import postController from "../controllers/postController"

const postRouter = Router()

postRouter.get('/', productController.getAllPosts)
postRouter.post('/', productController.createPost)
postRouter.get('/:id', productController.getPostByID)
postRouter.put('/:id', productController.updatePost)
postRouter.delete('/:id', postController.deletePost)

export default postRouter