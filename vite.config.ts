import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const dirname = path.dirname(
  fileURLToPath(import.meta.url),
);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(
        dirname,
        "./src",
      ),
    },
  },

  server: {
    port: 5173,
    strictPort: true,

    proxy: {
      "/api": {
        target:
          "https://l-s-a-project.onrender.com",
        changeOrigin: true,
        secure: true,
      },

      "/socket.io": {
        target:
          "https://l-s-a-project.onrender.com",
        changeOrigin: true,
        secure: true,
        ws: true,
      },
    },
  },
});

// ======================================================
// Local Backend Configuration
// Uncomment this block when using:
// http://localhost:3000
// ======================================================
//
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
//
//   resolve: {
//     alias: {
//       "@": path.resolve(
//         dirname,
//         "./src",
//       ),
//     },
//   },
//
//   server: {
//     port: 5173,
//     strictPort: true,
//
//     proxy: {
//       "/api": {
//         target:
//           "http://localhost:3000",
//         changeOrigin: true,
//       },
//
//       "/socket.io": {
//         target:
//           "http://localhost:3000",
//         changeOrigin: true,
//         ws: true,
//       },
//     },
//   },
// });