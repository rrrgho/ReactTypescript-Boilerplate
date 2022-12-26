module.exports = {
  extends: ["airbnb", "airbnb-typescript", "airbnb-typescript-prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
  },
};
