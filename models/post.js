import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
 {
  title: {
   type: String,
   required: true,
  },
  description: {
   type: String,
   required: true,
  },
  image: {
   type: String,
   required: false,
  },
 },
 { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
