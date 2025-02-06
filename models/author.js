import mongoose, { Schema, models } from "mongoose";

const authorModel = new Schema({
  authorId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
});

export const Author = models.Author || mongoose.model("Author", authorModel);

