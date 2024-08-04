import express from "express";
import { Webhook } from "svix";
import {
  createUser,
  deleteUser,
  getUserByEmail,
  updateUserStatusByUserId,
} from "../db/users";
import { ClerkUserActionType, Event } from "../types";

export const clerkWebhooks = async (
  req: express.Request,
  res: express.Response
) => {
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
    console.log("Svix error");
    return res.status(400).send("Error occurred -- no svix headers");
  }

  const body = JSON.stringify(req.body);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  // Verify the payload with the headers
  let verify: Event;
  try {
    verify = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as Event;
    console.log(verify);
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return res.status(400).send("Error occurred");
  }

  const { id, image_url, email_addresses, phone_numbers, username } =
    verify.data;
  const eventType = verify.type;
  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  try {
    if (eventType === ClerkUserActionType.Create) {
      const user = await getUserByEmail(email_addresses?.[0].email_address);
      if (user) {
        return res.status(400).send("Email already existed.");
      }
      const newUser = await createUser({
        username,
        email: email_addresses?.[0].email_address,
        mobile: phone_numbers?.[0],
        image_url: image_url,
        user_id: id,
        isDelete: false,
      });
      console.log("New user", newUser);
      return res.status(200).send("Create user successfully.");
    }

    if (eventType === ClerkUserActionType.Delete) {
      const result = await deleteUser(id);
      console.log("Deleting user", result);
      if (result)
        return res.status(200).send("Change active status successfully");
    }

    if (eventType === ClerkUserActionType.Update) {
      const updatedUser = await updateUserStatusByUserId(id, {
        username,
        email: email_addresses?.[0].email_address,
        mobile: phone_numbers?.[0],
        image_url: image_url,
      });
      console.log("Updated user", updatedUser);
      if (updatedUser) return res.status(200).send("Update user successfully");
    }
  } catch (err) {
    console.log("Error creating user", err);
    return res.status(400).send("Error occurred");
  }
};
