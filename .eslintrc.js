module.exports = {
  extends: ["airbnb", "airbnb-typescript", "airbnb-typescript-prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "react/function-component-definition": 0,
    "react/button-has-type": 0,
    "no-nested-ternary": 0,
  },
};
