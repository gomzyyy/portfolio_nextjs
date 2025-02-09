import { r } from "../../../../constants/responses.js";
import { Author } from "../../../../models/author.js";
import { Blog } from "../../../../models/blog.js";
import { NextResponse } from "next/server.js";
import { checkIfAuthorized } from "@/service/test.js";

export const POST = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const auth = searchParams.get("auth");
    const isAuthenticated = checkIfAuthorized(auth);
    if(!isAuthenticated){
        return NextResponse.json(
            {
              message: "This is an unauthorized action.",
              success: false,
            },
            { status: r.UNAUTHORIZED.code }
          ); 
    }
    const { title, author, content, tags, category, thumbnail } =
      await request.json();
    if (!title || !author || !content || !tags || !category || !thumbnail) {
      return NextResponse.json(
        {
          message: "Invalid request, can't create a blog.",
          success: false,
        },
        { status: r.BAD_REQUEST.code }
      );
    }

    if (title.trim().length > 100) {
      return NextResponse.json(
        {
          message: "Title cannot exceed 100 characters.",
          success: false,
        },
        { status: r.BAD_REQUEST.code }
      );
    }
    console.log("betbe");
    if (content.trim().length > 600) {
      return NextResponse.json(
        {
          message: "Content cannot exceed 600 characters.",
          success: false,
        },
        { status: r.BAD_REQUEST.code }
      );
    }
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

    let blogAuthor = await Author.findOne({ authorId: author.authorId });
    if (!blogAuthor) {
      blogAuthor = new Author({
        displayName: author.displayName,
        authorId: author.authorId,
      });
      await blogAuthor.save();
    }

    const newBlog = new Blog({
      title: title.trim(),
      author: blogAuthor,
      content: content.trim(),
      thumbnail,
      tags: validTags,
      category: validCategory,
    });
    await newBlog.save();

    return NextResponse.json(
      {
        message: "Blog created successfully.",
        success: true,
      },
      { status: r.OK.code }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : r.INTERNAL_SERVER_ERROR.message, success: false },
      { status: r.INTERNAL_SERVER_ERROR.code }
    );
  }
};