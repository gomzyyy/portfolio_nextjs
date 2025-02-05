import { r } from "../../constants/responses.js";
import { Contact } from "../../models/contact.js";
import { checkAdminById } from "../../service/test.js";

export const getAllRequests = async (req, res) => {
  try {
    const {id} = req.query
   const adminOk = checkAdminById(id)
   if(!adminOk){
    return res.status(r.UNAUTHORIZED.code).json({message:"Not authorised for this action.",requests:[],success:false})
   }
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
