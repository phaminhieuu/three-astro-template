/** @type {import("prettier").Config} */

const config = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
};

export default config;
