import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  order: { type: Number, required: true },
  url: { type: String, required: true },
});

const CommentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

const PostSchema = new mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  images: { type: [ImageSchema], default: [] },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: { type: [CommentSchema], default: [] },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

export type PostType = mongoose.InferSchemaType<typeof PostSchema>;

export const PostModel = mongoose.model("Post", PostSchema);

export const createPost = (values: Partial<PostType>) => new PostModel(values).save().then((post) => post.toObject());
