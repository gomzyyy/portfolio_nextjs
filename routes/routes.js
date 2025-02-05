import { Router } from "express";
import {
  getAllBlogs,
  getBlogByQuery,
  getBlogById,
} from "../controllers/blogs/getBlogs.js";
import { createBlogController } from "../controllers/blogs/createBlog.js";
import { contactMeController } from "../controllers/contact/contectMe.js";
import { getAllRequests } from "../controllers/contact/getContactRequests.js";
import { r } from "../constants/responses.js";

const routes = Router();
// get
routes.get("/get/blogs", getAllBlogs);
routes.get("/get/blogs/by-query", getBlogByQuery);
routes.get("/get/blog/by-id", getBlogById);
routes.get("/get/connection-requests", getAllRequests);

//post
routes.post("/post/blog", createBlogController);
routes.post("/post/connection-request", contactMeController);

//testing route
routes.get("/test", async (req, res) => {
  try {
    console.log("This is a TEST_CONSOLE✅");
    return res.status(r.OK.code).json({
      message:
        "This is a testing route, try editing './server.js' at line no.23 to see changes.",
      success: true,
    });
  } catch (error) {
    return res.status(r.INTERNAL_SERVER_ERROR.code).json({
      message:
        error instanceof Error
          ? error.message
          : "This is a testing route, try editing './server.js' at line no.23 to see changes.",
      success: false,
    });
  }
});

export default routes;
