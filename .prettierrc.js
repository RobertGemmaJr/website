/** @type {import("prettier").Config} */
export default {
  singleQuote: false,
  jsxSingleQuote: false,
  printWidth: 100,
  plugins: ["prettier-plugin-astro"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
