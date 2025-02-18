// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    ignores: [
      "**/*.spec.ts",
      "**/*.stories.ts",
      "**/*.spec.ts",
      "**/*.mock.ts",
      "**/*.d.ts",
      "**/*.e2e-spec.ts",
      "**/*.e2e-spec.ts",
      "**/*.test.ts",
      "**/*.test",
      "**/stories/**",
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/component-selector": ["off"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "restrict-template-expressions": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-unused-vars": [
        "off",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": [
        "error",
        {
          fixToUnknown: true,
        },
      ],
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      "object-curly-spacing": ["error", "always"],
      "no-multi-spaces": "error",
      curly: ["error", "multi-line"],
      "no-empty": "error",
      semi: ["error", "always"],
      "no-trailing-spaces": [
        "error",
        {
          ignoreComments: true,
        },
      ],
      "keyword-spacing": [
        "error",
        {
          before: true,
        },
      ],
      "space-before-blocks": ["error", "always"],
      "space-infix-ops": [
        "error",
        {
          int32Hint: false,
        },
      ],
      "@angular-eslint/template/accessibility-label-has-associated-control": [
        "warn",
        {
          controlComponents: ["app-common-input", "CommonInputComponent"],
        }
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/accessibility-label-has-associated-control": [
        "warn",
        {
          controlComponents: ["app-common-input", "CommonInputComponent"],
        }
      ],
    },
  },
);
