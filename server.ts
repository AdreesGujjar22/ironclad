import express from "express";
import path from "path";
import compression from "compression";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Compress all responses for fast mobile load
  app.use(compression());
  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "Ironclad Commercial Floors API" });
  });

  // Vite middleware for development only
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, server.cjs runs from inside the dist/ directory or project root
    const distPath = path.resolve(__dirname, '.');
    // Static assets with aggressive caching
    app.use(express.static(distPath, {
      maxAge: '1y',
      immutable: true,
      index: false,
    }));
    app.get('*', (req, res) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
