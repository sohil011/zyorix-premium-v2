import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

export default [
  js.configs.recommended,
  next.configs.recommended, // or next.configs["core-web-vitals"]
  { ignores: ["**/_archive/**", "**/.next/**", "node_modules"] },
];
