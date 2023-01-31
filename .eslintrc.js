/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
  ],
  env: { "cypress/globals": true },
  plugins: ["cypress", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    // Prevent issues with prettier/prettier known bug
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
  settings: {
    // We're using vitest which has a very similar API to jest
    // (so the linting plugins work nicely), but we have to
    // set the jest version explicitly.
    jest: { version: 28 },
  },
};
