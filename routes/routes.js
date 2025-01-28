import {Router} from "express"
import { getAllBlogs,getBlogByQuery,getBlogById } from "../controllers/blogs/getBlogs.js"
import { createBlogController } from "../controllers/blogs/createBlog.js"

const routes = Router()
// get
routes.get("/get/blogs",getAllBlogs)
routes.get("/get/blogs/by-query",getBlogByQuery)
routes.get("/get/blog/by-id",getBlogById)

//post
routes.post("/post/blog",createBlogController)


export default routes