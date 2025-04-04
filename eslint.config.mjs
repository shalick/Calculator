import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, eslintPluginPrettierRecommended },
    extends: ["js/recommended"],
  },
  eslintPluginPrettierRecommended,
]);
