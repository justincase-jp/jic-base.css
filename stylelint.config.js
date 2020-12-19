module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
	plugins: ['stylelint-scss'],
	rules: {
		'value-keyword-case': null,
		'function-name-case': null,
		'declaration-empty-line-before': null,
		'max-line-length': null,
		'at-rule-no-unknown': null,
		'no-descending-specificity': null,
	}
};
