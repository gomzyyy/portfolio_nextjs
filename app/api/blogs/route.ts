import { NextResponse } from "next/server";
import { Blog } from "../../../models/blog.js";
import { connectDB } from "../../../db/mongoDb.js";

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

    const allBlogs = await Blog.find().populate("author");

    const paginatedBlogs = allBlogs.slice(startIndex, endIndex);
    return NextResponse.json({
      blogs: Array.isArray(paginatedBlogs) ? paginatedBlogs.reverse() : [],
      noOfPages: allBlogs.length / limit < 1 ? 1 : Math.floor((allBlogs.length / limit)+0.9),
    });
  } catch (error) {
    return NextResponse.json({
      message:
        error instanceof Error
          ? error.message
          : "Internal server error occurred.",
      success: false,
    });
  }
};
