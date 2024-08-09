import express from "express";
// import authentication from "./authentication";
import webhooks from "./webhooks";
import post from "./post";
const router = express.Router();

export default (): express.Router => {
  // authentication(router);
  webhooks(router);
  post(router);
  return router;
};
