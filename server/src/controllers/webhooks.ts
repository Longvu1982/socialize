import express from "express";
import { Webhook } from "svix";

export const clerkWebhooks = async (req: express.Request, res: express.Response) => {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.log("no secret");
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env");
  }

  const svix_id = req.header("svix-id");
  const svix_timestamp = req.header("svix-timestamp");
  const svix_signature = req.header("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.log("svix error");
    return res.status(400).send("Error occurred -- no svix headers");
  }

  const body = JSON.stringify(req.body);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  // Verify the payload with the headers
  try {
  const verify = wh.verify(body, {
    "svix-id": svix_id,
    "svix-timestamp": svix_timestamp,
    "svix-signature": svix_signature,
  });
    console.log(verify);
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return res.status(400).send("Error occurred");
  }
};
