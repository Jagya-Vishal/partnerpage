import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes"; // Ensure this file exists and is correctly configured

const app = express();
const PORT = process.env.PORT || 3000;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register API routes
registerRoutes(app);

// Serve static frontend (React build)
const clientPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientPath));

// Catch-all to serve `index.html` for React routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
