import { r } from "../../constants/responses.js";
import { Author } from "../../models/author.js";
import { Blog } from "../../models/blog.js";

export const createBlogController = async (req, res) => {
  try {
    const { title, author, content, tags, category, thumbnail } =
      req.body;
    if (
      !title ||
      !author ||
      !content ||
      !tags ||
      !category ||
      !thumbnail
    ) {
      return res.status(r.BAD_REQUEST.code).json({
        message: "Invalid request, can't create a blog.",
        success: false,
      });
    }
    console.log("tnaeh")

    if (title.trim().length > 100) {
      return res.status(r.BAD_REQUEST.code).json({
        message: "Title cannot exceed 100 characters.",
        success: false,
      });
    }
    console.log("betbe")
    if (content.trim().length > 600) {
      return res.status(r.BAD_REQUEST.code).json({
        message: "Content cannot exceed 600 characters.",
        success: false,
      });
    }
    console.log("btrebhte")
    const returnCategoryStringValid = () => {
      return typeof category === "string"
        ? category.split(/[, ]/)[0]
        : "Uncategorized";
    };
    const validCategory = returnCategoryStringValid();

    const validTags = Array.isArray(tags)
      ? tags.slice(0, 4)
      : typeof tags === "string"
      ? tags
          .split(",")
          .map((tag) => tag.trim())
          .slice(0, 4)
      : [];

    let blogAuthor = await Author.findOne({ authorId:author.authorId });
    console.log("gneeth")
    if (!blogAuthor) {
      blogAuthor = new Author({
        displayName: author.displayName,
        authorId:author.authorId,
      });
      await blogAuthor.save();
    }
    console.log("bvdfwfweb")

    const newBlog = new Blog({
      title: title.trim(),
      author: blogAuthor,
      content: content.trim(),
      thumbnail,
      tags: validTags,
      category: validCategory,
    });
    console.log("erbebe")
    await newBlog.save();

    return res.status(r.OK.code).json({
      message: "Blog created successfully.",
      success: true,
    });
    console.log("gergeg")
  } catch (error) {
    console.log("rgeg")
    return res
      .status(r.INTERNAL_SERVER_ERROR.code)
      .json({ message: r.INTERNAL_SERVER_ERROR.message, success: false });
  }
};
