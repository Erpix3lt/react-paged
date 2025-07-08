import ESLintPluginVitest from "@vitest/eslint-plugin";
import ESLintPluginJestDOM from "eslint-plugin-jest-dom";
import ESLintPluginReact from "eslint-plugin-react";
import ESLintPluginTestingLibrary from "eslint-plugin-testing-library";
import {
  parser as ESLintParserTypescript,
  plugin as ESLintPluginTypescript,
} from "typescript-eslint";

const ERROR = "error";
const WARN = "warn";

const testFiles = ["**/*.test.*"];

export const config = [
  {
    ignores: ["**/.cache/**", "**/node_modules/**", "**/dist/**"],
  },

  {
    files: ["**/*.tsx"],
    plugins: {
      react: ESLintPluginReact,
    },
    languageOptions: {
      parser: ESLintParserTypescript,
      parserOptions: {
        jsx: true,
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-curly-brace-presence": [
        "error",

        {
          props: "always",
          children: "always",
          propElementValues: "always",
        },
      ],
    },
  },

  {
    files: ["**/*.ts?(x)"],
    languageOptions: {
      parser: ESLintParserTypescript,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      "@typescript-eslint": ESLintPluginTypescript,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        ERROR,
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        WARN,
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "inline-type-imports",
        },
      ],
    },
  },

  {
    files: ["**/*.ts?(x)"],
    ignores: testFiles,
    rules: {
      "no-restricted-imports": [
        ERROR,
        {
          patterns: [
            {
              group: testFiles,
              message: "Do not import test files in source files",
            },
          ],
        },
      ],
    },
  },

  {
    files: testFiles,
    plugins: {
      "testing-library": ESLintPluginTestingLibrary,
    },
    rules: {
      "testing-library/no-unnecessary-act": [WARN, { isStrict: false }],
      "testing-library/no-wait-for-side-effects": ERROR,
      "testing-library/prefer-find-by": ERROR,
    },
  },

  {
    files: testFiles,
    plugins: {
      "jest-dom": ESLintPluginJestDOM,
    },
    rules: {
      "jest-dom/prefer-checked": ERROR,
      "jest-dom/prefer-enabled-disabled": ERROR,
      "jest-dom/prefer-focus": ERROR,
      "jest-dom/prefer-required": ERROR,
    },
  },

  {
    files: testFiles,
    plugins: {
      vitest: ESLintPluginVitest,
    },
    rules: {
      "vitest/no-focused-tests": [WARN, { fixable: false }],
    },
  },
];

// this is for backward compatibility
export default config;
