import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const legacyArchiveRoutes = () => ({
  name: "legacy-archive-routes",
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      if (request.url === "/2026") {
        response.statusCode = 308;
        response.setHeader("Location", "/2026/");
        response.end();
        return;
      }

      if (request.url === "/2026/") {
        request.url = "/2026/index.html";
      }
      next();
    });
  },
});

export default defineConfig({
  vite: {
    plugins: [legacyArchiveRoutes(), tailwindcss()],
  },
});
