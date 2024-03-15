import { Post } from "../models/post.js";

export const createPost = async (req, res) => {
 try {
  const post = await Post.create(req.body);
  res.status(200).json(post);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export const getPosts = async (req, res) => {
 try {
  const posts = await Post.find();
  if (posts.length === 0) {
   return res.status(404).json({ message: "You do not have any post" });
  } else {
   res.status(200).json(posts);
  }
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export const getSinglePost = async (req, res) => {
 try {
  const { id } = req.params;
  const postID = id;
  const post = await Post.findById(postID);
  if (!post) {
   return res.status(404).json({ message: "Post not found" });
  } else {
   res.status(200).json(post);
  }
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export const updatePost = async (req, res) => {
 try {
  const { id } = req.params;
  const postID = id;
  const post = await Post.findByIdAndUpdate(postID, req.body, {
   // gives you the updated post
   new: true,
  });
  if (!post) {
   return res.status(404).json({ message: "Post not found" });
  } else {
   res.status(200).json(post);
  }
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export const deletePost = async (req, res) => {
 try {
  const { id } = req.params;
  const postID = id;
  const post = await Post.findByIdAndDelete(postID);
  res.status(200).json({ message: "Post deleted successfully" });
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};
