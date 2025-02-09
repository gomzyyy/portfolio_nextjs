import { NextResponse } from "next/server";
import { r } from "../../../../constants/responses.js";
import { Author } from "@/models/author";
import { Contact } from "@/models/contact.js";
import { connectDB } from "../../../../db/mongoDb";

connectDB()
export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      author,
      number,
      countryCode,
      socialHandleUrl,
      socialHandleUrlType,
      message,
    } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        {
          message: "Required entries are missing. (Name and Email)",
          success: false,
        },
        { status: r.BAD_REQUEST.code }
      );
    }

    let existingAuthor = null;

    if (author?.authorId && author?.displayName) {
      existingAuthor = await Author.findOneAndUpdate(
        { authorId: author.authorId },
        { authorId: author.authorId, displayName: author.displayName },
        { new: true, upsert: true }
      );
    }

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      existingContact.message = message?.trim() || null;
      existingContact.number = number?.trim() || null;
      existingContact.countryCode = countryCode?.trim() || null;
      existingContact.socialHandleUrl = socialHandleUrl?.trim() || null;
      existingContact.socialHandleUrlType = socialHandleUrlType?.trim() || null;
      await existingContact.save();
      return NextResponse.json({
        message: "Request sent successfully ✅",
        success: true,
      });
    }

    const contactDetails = {
      name: name.trim(),
      email: email.trim(),
      author: existingAuthor,
      number: number?.trim() || null,
      countryCode: countryCode?.trim() || null,
      socialHandleUrl: socialHandleUrl?.trim() || null,
      socialHandleUrlType: socialHandleUrlType?.trim() || null,
      message: message?.trim() || null,
    };

    await Contact.create(contactDetails);

    return NextResponse.json({
      message: "Request sent successfully ✅",
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      error instanceof Error
        ? error.message
        : "An unknown error occured while sending the contact request."
    );
  }
}
