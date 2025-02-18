import type { Express } from "express";
import { createServer, type Server } from "http";
import storage from "./storage"; // Ensure this is correctly imported

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check route
  app.get("/api/health", (_req, res) => {
    res.json({ status: "Server is running" });
  });

  // API Route to get users
  app.get("/api/users", async (_req, res) => {
    try {
      const users = await storage.getUsers(); // Ensure this function exists in storage.ts
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
