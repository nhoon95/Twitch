import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  text: {
    type: String,
    required: "text is required",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const models = mongoose.model("Comment", commentSchema);

export default models;
