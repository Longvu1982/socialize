import express from "express";
import { createPost } from "../db/posts";
import { getUserByEmail } from "../db/users";
import { commonRes } from "../helper";

export const create = async (req: express.Request, res: express.Response) => {
  try {
    const { content, creator, images } = req.body;
    if (!content?.trim()) {
      return commonRes(res, { status: 400, message: "Missing content" });
    }
    const existingUser = await getUserByEmail(creator.email);

    if (!existingUser) {
      return commonRes(res, { status: 400, message: "Unauthorized" });
    }

    const post = await createPost({
      content,
      creator: existingUser._id,
      images,
    });

    return commonRes(res, {
      status: 200,
      message: "Success",
      result: post,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
