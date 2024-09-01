import { Post } from "models/post"
import {ResultSetHeader, RowDataPacket} from "mysql2"
import db from "../config/database"

class PostService {
  async getAllPosts(): Promise<Post[]> {
    const posts = await db.query<RowDataPacket[]>(`select * from posts`)
    return posts as Post[]
  }

  async getPostByID(id: number): Promise<Post | null> {
    const posts = await db.query<RowDataPacket[]>(`select * from posts where id = ?`, id)
    if(Array.isArray(posts) && posts.length > 0){
      return posts[0] as Post
    }
    return null
  }

  async createPost(data: Post): Promise<Post | null> {
    const result = await db.query<ResultSetHeader>(`insert into posts set ?`, data)
    if(result.insertId){
      return await this.getPostByID(result.insertId)
    }
    return null
  }

  async updatePost(data: Post, id: number): Promise<Post | null> {
    const result = await db.query<ResultSetHeader>(`update posts set ? where id = ?`, [data, id])
    if(result.affectedRows){
      return await this.getPostByID(id)
    }
    return null
  }

  async deletePost(id: number): Promise<boolean> {
    const result = await db.query<ResultSetHeader>(`delete from posts where id = ?`, id)
    return result.affectedRows > 0
  }

}

export default new PostService()