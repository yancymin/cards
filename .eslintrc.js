module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-mixed-spaces-and-tabs': [0],
        'comma-dangle': [2, 'never'],
        indent: [2, 4],
        'no-param-reassign': [0],
        'import/extensions': [0],
        'linebreak-style': 'off',
        'no-multiple-empty-lines': [0, { max: 100 }],
        'max-len': [0, 200, 4],
        'max-line-length': [true, 200],
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
        'prefer-destructuring': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
