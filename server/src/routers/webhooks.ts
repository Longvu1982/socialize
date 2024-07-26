import express from "express";

import { clerkWebhooks } from "../controllers/webhooks";

export default (router: express.Router) => {
  router.post("/api/webhooks", clerkWebhooks);
};
