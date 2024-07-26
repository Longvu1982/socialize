import express from "express";
import authentication from "./authentication";
import webhooks from "./webhooks";
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  webhooks(router);
  return router;
};
