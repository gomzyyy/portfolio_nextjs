import { NextResponse } from "next/server";
import { connectDB } from "@/db/mongoDb";
import { Author } from "../../models/author.js";
import { Blog } from "../../models/blog.js";
import {r} from "../../constants/responses.js"
import { checkIfAuthorized } from "@/service/test.js";

connectDB();
export const GET = async (request: Request) => {

 
  try {
    const { searchParams } = new URL(request.url);
 const auth = searchParams.get("auth");
    const isAuthenticated = checkIfAuthorized(auth);
    if (!isAuthenticated) {
      return NextResponse.json(
        {
          message: "This is an unauthorized action.",
          success: false,
          requests: [],
        },
        { status: r.UNAUTHORIZED.code }
      );
    }

    const name = searchParams.get("name");
    const age = searchParams.get("age");
    const authors = await Author.find();
    const blogs = await Blog.find().populate("author");



    return NextResponse.json(
      {
        message: "Test route is working.",
        data: {
          name,
          age,
        },
        authors,
        blogs,
        success: true,
      },
      { status: 200 }
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
      { status: 500 }
    );
  }
};
