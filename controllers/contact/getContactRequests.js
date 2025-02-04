import { r } from "../../constants/responses.js";
import { Contact } from "../../models/contact.js";

export const getAllRequests = async (req, res) => {
  try {
    const allContactRequests = await Contact.find();

    if (allContactRequests && allContactRequests.length > 0) {
      return res.status(r.OK.code).json({
        message: "Request processed successfully.",
        requests: allContactRequests,
        success: true,
      });
    }
    return res.status(r.OK.code).json({
      message: "Request processed successfully.",
      requests: [],
      success: true,
    });
  } catch (error) {
    return res.status(r.INTERNAL_SERVER_ERROR.code).json({
      message:
        error instanceof Error
          ? error.message
          : r.INTERNAL_SERVER_ERROR.message,
      success: false,
    });
  }
};
