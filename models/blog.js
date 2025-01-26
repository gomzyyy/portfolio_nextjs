import mongoose, { Schema } from "mongoose";

const blogModel = new Schema(
  {
    title: {
      type: string,
      required: true,
    },
    content: {
      type: string,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    tags: [
      {
        type: string,
      },
    ],
    thumbnail: {
      type: string,
      default: "",
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog",blogModel)
