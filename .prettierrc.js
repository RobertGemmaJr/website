/** @type {import("prettier").Config} */
export default {
  singleQuote: false,
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
