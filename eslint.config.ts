import eslintPluginAstro from "eslint-plugin-astro";
import jsEslint from "@eslint/js";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  {
    ignores: [
      // Auto-generated
      "node_modules",
      ".astro",
      "dist",
      ".env",
      // Misc
      ".DS_Store",
      ".cache",
      "tsconfig.tsbuildinfo",
    ],
  },
  jsEslint.configs.recommended,
  tsEslint.configs.strictTypeChecked,
  eslintPluginAstro.configs.recommended,

  // Additional rules
  {
    rules: {
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
);
