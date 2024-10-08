module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "no-unsafe-argument ": "off",
    "@typescript-eslint/no-unsafe-call": "warn",
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};






