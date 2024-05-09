module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-scss"],
  rules: {
    "import-notation": "string",
    "value-keyword-case": null,
    "function-name-case": null,
    "declaration-empty-line-before": null,
    "at-rule-no-unknown": null,
    "no-descending-specificity": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "keyframes-name-pattern": null,
    "rule-empty-line-before": null,
    "function-no-unknown": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "function-url-quotes": ["never"],
  },
};
