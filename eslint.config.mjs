// eslint.config.mjs
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

const nextCore = next.configs["core-web-vitals"]; // Next.js recommended rules
const nextRules = nextCore?.rules ?? {};

export default [
  js.configs.recommended,
  {
    plugins: { "@next/next": next },
    rules: nextRules,
  },
  {
    ignores: ["**/_archive/**", "**/.next/**", "node_modules"],
  },
];
