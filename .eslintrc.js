module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/react',
    ],
    rules: {
        'max-len': 1,
        'no-proto': 1,
        'no-undef': 1,
        'no-use-before-define': 1,
        'radix': 1,
        'react-hooks/rules-of-hooks': 1,
        'react/no-array-index-key': 1,
        'react/prefer-stateless-function': 0,
    },
};