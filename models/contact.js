import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author:{
type:mongoose.Schema.Types.ObjectId,
ref:"Author"
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
export const Contact = mongoose.model("Contact", contactSchema);
