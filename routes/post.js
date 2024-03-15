import express from "express";
// import { requireLogIn } from "../middlewares/index.js";
import {
 createPost,
 getPosts,
 getSinglePost,
 updatePost,
 deletePost,
} from "../controller/post.js";

const router = express.Router();

// create
router.post("/admin/post/create", createPost);

// read
router.get("/", getPosts);
router.get("/post/:id", getSinglePost);

// update
router.put("/admin/post/update/:id", updatePost);

// delete
router.delete("/admin/post/delete/:id", deletePost);

export { router as postRoutes };
