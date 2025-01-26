import { blogs } from "../../constants/serverData.js";
export const getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedBlogs = blogs.slice(startIndex, endIndex);
    return res
      .status(200)
      .json({
        blogs: paginatedBlogs,
        noOfPages: Math.floor(blogs.length / 10),
      });
  } catch (error) {
    console.log(error);
  }
};
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.query;
    const blogById = blogs.find((f) => (f.id = id));
    if (!blogById)
      return res.status(200).json({
        blog: undefined,
      });
    return res.status(200).json({
      blog: blogById,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBlogByQuery = async (req, res) => {
  try {
    const { query } = req.query;
    const blogsByQuery = blogs.filter(
      (f) =>
        f.title.trim().toLowerCase().includes(query.trim().toLowerCase()) ||
        f.tags.some((s) =>
          s.trim().toLowerCase().includes(query.trim().toLowerCase())
        )
    );
    if (blogsByQuery.length === 0) {
      return res.status(200).json({
        blogs: [],
        noOnPages: 0,
      });
    }
    return res.status(200).json({
      blogs: blogsByQuery,
      noOfPages: Math.floor(blogsByQuery.length / 10),
    });
  } catch (error) {
    console.log(error);
  }
};
