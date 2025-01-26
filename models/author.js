import mongoose, { Schema } from "mongoose";

const authorModel = new Schema({
  authorId: {
    type: string,
    required: true,
  },
  displayName: {
    type: string,
    required: true,
  },
});

export const Author = mongoose.model("Author",authorModel)
