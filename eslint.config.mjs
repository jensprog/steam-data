// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "@stylistic/comma-dangle": "off",
    "@stylistic/semi": "off",
    "@stylistic/quotes": "off",
    "@stylistic/brace-style": "off",
  },
});
