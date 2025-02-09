import { NextResponse } from "next/server";
import { Blog } from "../../../models/blog.js";
import { Author } from "../../../models/author.js";
import { connectDB } from "../../../db/mongoDb";

connectDB();
export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    const page = parseInt(pageParam ?? "1");
    const limit = parseInt(limitParam ?? "10");
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    await Author.find();
    const allBlogs = await Blog.find().populate("author");
    const paginatedBlogs = allBlogs.slice(startIndex, endIndex);

    return NextResponse.json(
      {
        blogs: Array.isArray(paginatedBlogs) ? paginatedBlogs.reverse() : [],
        noOfPages:
          allBlogs.length / limit < 1
            ? 1
            : Math.floor(allBlogs.length / limit + 0.9),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Internal server error occurred.",
        success: false,
      },
      {
        // headers,
        status: 500,
      }
    );
  }
};
