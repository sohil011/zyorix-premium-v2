import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

export default [
  js.configs.recommended,
  next.configs["core-web-vitals"],   // stricter Next.js rules
  { ignores: ["**/_archive/**", "**/.next/**", "node_modules"] },
];
