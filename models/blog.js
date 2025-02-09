import mongoose from "mongoose";
const { Schema, models } = mongoose;

const blogModel = new Schema(
  {
    title: { type: String, required: true },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    tags: [
      {
        type: String,
      },
    ],
    thumbnail: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = models.Blog || mongoose.model("Blog", blogModel);
