/* eslint-env node */
module.exports = {
	root: true,
	env: {
		browser: true,
		// es2021: true,
		es6: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		jsxPragma: 'React',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['plugin:vue/vue3-essential', 'plugin:vue/essential', 'eslint:recommended'],
	plugins: ['vue', '@typescript-eslint', 'import'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.vue'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
	rules: {
		// http://eslint.cn/docs/rules/
		// https://eslint.vuejs.org/rules/
		// https://typescript-eslint.io/rules/no-unused-vars/
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'vue/custom-event-name-casing': 'off',
		'vue/attributes-order': 'off',
		'vue/one-component-per-file': 'off',
		'vue/html-closing-bracket-newline': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/attribute-hyphenation': 'off',
		'vue/html-self-closing': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/require-default-prop': 'off',
		'vue/no-v-model-argument': 'off',
		'vue/no-arrow-functions-in-watch': 'off',
		'vue/no-template-key': 'off',
		'vue/no-v-for-template-key': 'off',
		'vue/no-v-html': 'off',
		'vue/comment-directive': 'off',
		'vue/no-parsing-error': 'off',
		'vue/no-deprecated-v-on-native-modifier': 'off',
		'vue/multi-word-component-names': 'off',
		'no-useless-escape': 'off',
		'no-sparse-arrays': 'off',
		'no-prototype-builtins': 'off',
		'no-constant-condition': 'off',
		'no-use-before-define': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-syntax': 'off',
		'generator-star-spacing': 'off',
		'no-unreachable': 'off',
		'no-multiple-template-root': 'off',
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'no-v-model-argument': 'off',
		'no-case-declarations': 'off',
		'no-console': 'off',
		'no-redeclare': 'off',
		'vue/no-unused-vars': 'off', // 关闭 vue/no-unused-vars 规则
		'@typescript-eslint/no-unused-vars': 'off', // 关闭 @typescript-eslint/no-unused-vars 规则
		'no-unused-vars': 'off', // 关闭 no-unused-vars 规则
		'import/no-unresolved': ['error', { caseSensitive: true }],
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src']], // 配置别名 @ 对应的路径
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
			},
		},
	},
}

