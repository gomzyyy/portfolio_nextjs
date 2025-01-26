import {Router} from "express"
import { getAllBlogs,getBlogByQuery,getBlogById } from "../controllers/blogs/getBlogs.js"

const routes = Router()
// get
routes.get("/get/blogs",getAllBlogs)
routes.get("/get/blogs/by-query",getBlogByQuery)
routes.get("/get/blog/by-id",getBlogById)


export default routes