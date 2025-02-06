import { NextResponse } from "next/server";
import { connectDB } from "@/db/mongoDb";
import { Author } from "../../models/author.js";
import { Blog } from "../../models/blog.js";

connectDB();

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const authors = await Author.find();
  const blogs = await Blog.find().populate("author");
  try {
    return NextResponse.json({
      message: "Test route is working.",
      data: {
        name,
        age,
      },
      authors,
      blogs,
      success: true,
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
