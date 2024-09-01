import { Request, Response } from "express"
import productService from "../services/postService"
import { sendError, sendSuccess } from "../utils/requestHandlers"

class PostController {
  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await productService.getAllPosts()
      sendSuccess(res, posts)
    } catch (e: any) {
      sendError(res, e.message)
    }
  }

  async getPostByID(req: Request, res: Response) {
    try {
      const id = Number(req.params['id'])
      const post = await productService.getPostByID(id)
      if(post){
        sendSuccess(res, post)
      } else {
        sendError(res, `Post not found`, 404)
      }
    } catch (e: any) {
      sendError(res, e.message)
    }
  }

  async createPost(req: Request, res: Response) {
    try {
      const data = req.body      
      const post = await productService.createPost(data)
      if(post){
        sendSuccess(res, post)
      } else {
        sendError(res, `Post not created`, 500)
      }
    } catch (e: any) {
      sendError(res, e.message)
    }
  }

  async updatePost(req: Request, res: Response) {
    try {
      const id = Number(req.params['id'])
      const data = req.body      
      const post = await productService.updatePost(data, id)
      if(post){
        sendSuccess(res, post)
      } else {
        sendError(res, `Post not updated`, 500)
      }
    } catch (e: any) {
      sendError(res, e.message)
    }
  }

  async deletePost(req: Request, res: Response) {
    try {
      const id = Number(req.params['id'])
      const deleted = await productService.deletePost(id)
      if(deleted){
        sendSuccess(res, {})
      } else {
        sendError(res, `Post not found`, 404)
      }
    } catch (e: any) {
      sendError(res, e.message)
    }
  }
}

export default new PostController()