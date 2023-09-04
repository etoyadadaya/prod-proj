import react from "@vitejs/plugin-react-swc";
import {resolve} from "path";
import {defineConfig, splitVendorChunkPlugin} from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      eslint({
        exclude: ["**/node_modules/**", "**/packages/**"],
      }),
    ],
    resolve: {
      alias: {
        "@common": resolve(__dirname, "src/common"),
        "@shared": resolve(__dirname, "src/components/shared"),
        "@widgets": resolve(__dirname, "src/components/widgets"),
        "@entities": resolve(__dirname, "src/entities"),
        "@hooks": resolve(__dirname, "src/hooks"),
        "@pages": resolve(__dirname, "src/pages"),
        "@services": resolve(__dirname, "src/utils"),
      },
    },
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
    },
  };
});
