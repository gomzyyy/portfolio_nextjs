import { NextResponse } from "next/server";
import { r } from "../../../../constants/responses.js";
import { Contact } from "@/models/contact.js";
import { checkAdminById, checkIfAuthorized } from "../../../../service/test.js";
import { connectDB } from "../../../../db/mongoDb";

connectDB();
export async function GET(request: Request) {
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
    const id = searchParams.get("id");
    const adminOk = checkAdminById(id);
    if (!adminOk) {
      return NextResponse.json(
        {
          message: "Not authorised for this action.",
          requests: [],
          success: false,
        },
        { status: r.BAD_REQUEST.code }
      );
    }
    const allContactRequests = await Contact.find();

    if (allContactRequests && allContactRequests.length > 0) {
      return NextResponse.json(
        {
          message: "Request processed successfully.",
          requests: allContactRequests,
          success: true,
        },
        { status: r.OK.code }
      );
    }
    return NextResponse.json(
      {
        message: "Request processed successfully.",
        success: true,
      },
      { status: r.OK.code }
    );
  } catch (error) {
    return NextResponse.json(
      error instanceof Error
        ? error.message
        : "An unknown error occured while sending the contact request."
    );
  }
}
