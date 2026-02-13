import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(messageData);
      res.json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid message data" });
    }
  });

  return httpServer;
}
