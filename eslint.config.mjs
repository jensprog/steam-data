// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "@stylistic/comma-dangle": "off",
    "@stylistic/semi": "off",
    "@stylistic/quotes": "off",
    "@stylistic/brace-style": "off",
    "@stylistic/arrow-parens": "off",
    "@stylistic/member-delimiter-style": "off",
    "nuxt/nuxt-config-keys-order": "off",
    "@stylistic/indent": "off",
    "@stylistic/indent-binary-ops": "off",
    "vue/html-indent": "off",
  },
});
