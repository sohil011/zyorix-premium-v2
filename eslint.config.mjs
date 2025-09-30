import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["**/_archive/**", "**/.next/**", "node_modules"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }]
    }
  },
  { files: ["next-env.d.ts"], rules: { "@typescript-eslint/triple-slash-reference": "off" } }
];
