import { r } from "../../constants/responses.js";
import { Contact } from "../../models/contact.js";
import { Author } from "../../models/author.js";

export const contactMeController = async (req, res) => {
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
    } = req.body;

    if (!name || !email) {
      return res.status(r.BAD_REQUEST.code).json({
        message: "Required entries are missing. (Name and Email)",
        success: false,
      });
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
      return res.status(r.OK.code).json({
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
    console.log(contactDetails);

    await Contact.create(contactDetails);

    return res.status(r.OK.code).json({
      message: "Request sent successfully ✅",
      success: true,
    });
  } catch (error) {
    return res.status(r.INTERNAL_SERVER_ERROR.code).json({
      message:
        error instanceof Error
          ? error.message
          : "Internal server error occurred.",
      success: false,
    });
  }
};
