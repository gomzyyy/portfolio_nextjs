import {Router} from "express"
import { getAllBlogs,getBlogByQuery,getBlogById } from "../controllers/blogs/getBlogs.js"
import { createBlogController } from "../controllers/blogs/createBlog.js"
import { contactMeController } from "../controllers/contact/contectMe.js"
import { getAllRequests } from "../controllers/contact/getContactRequests.js"

const routes = Router()
// get
routes.get("/get/blogs",getAllBlogs)
routes.get("/get/blogs/by-query",getBlogByQuery)
routes.get("/get/blog/by-id",getBlogById)
routes.get("/get/connection-requests",getAllRequests)

//post
routes.post("/post/blog",createBlogController)
routes.post("/post/connection-request",contactMeController)


export default routes