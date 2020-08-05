import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File Url is required",
  },
  title: {
    type: String,
    required: "Titls is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  game: {
    type: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  imageFileUrls: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Img",
  },
});

const model = mongoose.model("Video", VideoSchema);

export default model;
