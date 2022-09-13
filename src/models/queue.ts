import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const Queue = mongoose.model("Queue", blogSchema);

export default Queue;
