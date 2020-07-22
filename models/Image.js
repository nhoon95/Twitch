import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageFileUrl: {
    type: String,
    required: "img is required",
  },
});

const model = mongoose.model("Img", imageSchema);

export default model;
