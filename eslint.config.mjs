import path from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import tailwindcss from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

export default tseslint.config(
	{
		ignores: [".next", "eslint.config.mjs", "node_modules", "*.config.*", "*.log", "uidesigntest/**", "components/cc/**", "lib/framer.ts"],
	},
	js.configs.recommended,

	// TypeScript ESLint - strict type-checked configs
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{ prefer: "type-imports", fixStyle: "separate-type-imports" },
			],
			"@typescript-eslint/no-misused-promises": [
				"error",
				{ checksVoidReturn: { attributes: false } },
			],
			"@typescript-eslint/no-unnecessary-condition": [
				"error",
				{ allowConstantLoopConditions: true },
			],
			"@typescript-eslint/no-floating-promises": "error",
			"@typescript-eslint/consistent-type-definitions": ["warn", "type"],
			"@typescript-eslint/explicit-function-return-type": [
				"warn",
				{
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/return-await": "error",
			"@typescript-eslint/no-confusing-void-expression": "error",
			"@typescript-eslint/no-meaningless-void-operator": "warn",
			"@typescript-eslint/prefer-nullish-coalescing": "error",
			"@typescript-eslint/no-unnecessary-condition": "error",
			"@typescript-eslint/no-unsafe-assignment": "warn",
			"@typescript-eslint/no-unsafe-member-access": "warn",
			"@typescript-eslint/no-unsafe-call": "warn",
			"@typescript-eslint/no-unsafe-return": "warn",
			"@typescript-eslint/no-non-null-assertion": "warn",
			"@typescript-eslint/prefer-optional-chain": "warn",
			"@typescript-eslint/no-unnecessary-type-assertion": "warn",
			"@typescript-eslint/no-deprecated": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
		},
	},

	// Next.js - only use core-web-vitals, avoid problematic flat-config rules
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			"@next/next": nextPlugin,
		},
		rules: {
			...nextPlugin.configs["core-web-vitals"].rules,
			"@next/next/no-duplicate-head": "off",
			"@next/next/no-html-link-for-pages": "off",
			"@next/next/no-page-custom-font": "off",
			"@next/next/no-img-element": "off",
			"@next/next/no-before-interactive-script-outside-document": "off",
			"@next/next/no-script-component-in-head": "off",
			"@next/next/no-unwanted-polyfillio": "off",
			"@next/next/no-head-element": "off",
			"@next/next/no-duplicate-head": "off",
			"@next/next/no-css-tags": "off",
			"@next/next/no-document-import-in-page": "off",
			"@next/next/no-async-client-component": "off",
			"@next/next/no-html-link-for-pages": "off",
		},
	},

	// React recommended
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		...reactRecommended,
		languageOptions: {
			...reactRecommended.languageOptions,
			globals: {
				serviceworker: true,
				browser: true,
			},
		},
		settings: {
			react: {
				version: "18.3",
			},
		},
		rules: {
			"react/display-name": "off",
			"react/prop-types": "off",
			"react/jsx-key": "error",
			"react/jsx-no-target-blank": "error",
			"react/jsx-no-useless-fragment": "warn",
			"react/no-array-index-key": "warn",
			"react/no-deprecated": "warn",
			"react/no-unused-state": "error",
			"react/button-has-type": "error",
			"react/jsx-fragments": ["error", "element"],
			"react/no-children-prop": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-curly-brace-presence": "error",
			"react/jsx-boolean-value": "error",
			"react/no-direct-mutation-state": "error",
			"react/self-closing-comp": "error",
			"react/no-unknown-property": "error",
			"react/no-unescaped-entities": "off",
		},
	},

	// React hooks
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			"react-hooks": hooksPlugin,
		},
		rules: {
			...hooksPlugin.configs.recommended.rules,
		},
	},

	// JSX A11y
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			"jsx-a11y": jsxA11y,
		},
		rules: {
			"jsx-a11y/alt-text": [
				"warn",
				{
					elements: ["img"],
					img: ["Image"],
				},
			],
			"jsx-a11y/aria-props": "warn",
			"jsx-a11y/aria-proptypes": "warn",
			"jsx-a11y/aria-unsupported-elements": "warn",
			"jsx-a11y/role-has-required-aria-props": "warn",
			"jsx-a11y/role-supports-aria-props": "warn",
			"jsx-a11y/label-has-associated-control": [
				"error",
				{
					labelComponents: ["Label"],
					labelAttributes: ["label"],
					controlComponents: ["Input", "Select"],
					depth: 2,
					required: { some: ["nesting", "id"] },
				},
			],
			"jsx-a11y/anchor-is-valid": [
				"error",
				{
					components: ["Link"],
					specialLink: ["hrefLeft", "hrefRight"],
					aspects: ["invalidHref", "preferButton"],
				},
			],
		},
	},

	// TailwindCSS - disabled for now due to flat config compatibility issues
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			tailwindcss,
		},
		rules: {
			"tailwindcss/classnames-order": "off",
			"tailwindcss/migration-from-tailwind-2": "off",
			"tailwindcss/enforces-negative-arbitrary-values": "off",
			"tailwindcss/enforces-shorthand": "off",
			"tailwindcss/no-contradicting-classname": "off",
			"tailwindcss/no-unnecessary-arbitrary-value": "off",
			"tailwindcss/no-custom-classname": "off",
			"tailwindcss/no-arbitrary-value": "off",
		},
	},

	// Next.js page/layout files - allow default exports
	{
		files: ["{page,layout,not-found}.tsx"],
		rules: {
			"import/no-default-export": "off",
		},
	},

	// Node specific rules (for config files)
	{
		files: ["*.cjs", "*.mjs", "*.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "commonjs",
		},
		rules: {
			"node/handle-callback-err": "off",
			"no-async-promise-executor": "error",
			"no-await-in-loop": "error",
			"no-promise-executor-return": "error",
			"require-atomic-updates": "error",
			"max-nested-callbacks": ["error", 3],
			"prefer-promise-reject-errors": "error",
			"node/no-callback-literal": "error",
			"node/no-sync": "error",
		},
	},

	// General rules
	{
		plugins: {
			import: importPlugin,
		},
		rules: {
			"no-dupe-else-if": "error",
			"no-dupe-keys": "error",
			"no-duplicate-imports": "error",
			"no-unreachable": "error",
			"no-use-before-define": "error",
			"dot-notation": "error",
			"eqeqeq": "error",
			"no-lonely-if": "error",
			"no-return-await": "error",
			"no-useless-catch": "error",
			"no-var": "error",
			"prefer-const": "warn",
			"no-unneeded-ternary": "error",
			"no-restricted-imports": [
				"off",
				{
					patterns: ["../"],
				},
			],
			"import/no-default-export": "off",
			"import/no-anonymous-default-export": "warn",
			"consistent-return": "error",
			"object-shorthand": "warn",
			"no-plusplus": [
				"error",
				{
					allowForLoopAfterthoughts: true,
				},
			],
			"no-implicit-coercion": "error",
		},
	},

	// Prettier (must be last)
	eslintConfigPrettier
);