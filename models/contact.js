import mongoose from "mongoose";
const { Schema, models } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  email: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
  },
  number: {
    type: String,
  },
  socialHandleUrl: {
    type: String,
  },
  socialHandleUrlType: {
    type: String,
  },
  message: {
    type: String,
  },
});
export const Contact = models.Contact || mongoose.model("Contact", contactSchema);
