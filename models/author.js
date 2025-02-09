import mongoose from "mongoose";
const { Schema, models } = mongoose;

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
