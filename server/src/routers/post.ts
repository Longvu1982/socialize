import express from "express";

import { create } from "../controllers/post";

export default (router: express.Router) => {
  router.post("/api/post/create-post", create);
};
