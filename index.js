'use strict';
const path = require('path');
const common = require(path.join(__dirname, '_common.js'));

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        // 'jest/globals': true, // use with eslint-plugin-jest
        jest: true
    },
    globals: {
        // https://github.com/Chatie/eslint-config/issues/45
        NodeJS: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    plugins: [
        'eslint-plugin-prefer-arrow',
        'eslint-plugin-no-null',
        'eslint-plugin-unicorn',
        'eslint-plugin-import',
        'eslint-plugin-jsdoc'
    ],
    extends: [
        'eslint:recommended'
    ],
    rules: {
        'arrow-body-style': 'off',
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'brace-style': [
            'off',
            'off'
        ],
        'class-methods-use-this': 'off',
        'comma-dangle': 'error',
        'complexity': [
            'error',
            {
                max: 30
            }
        ],
        'constructor-super': 'error',
        'curly': [
            'error',
            'multi-line'
        ],
        'default-case': 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': [
            'error',
            'always'
        ],
        'guard-for-in': 'error',
        'id-blacklist': [
            'error',
            'any',
            'Number',
            'number',
            'String',
            'string',
            'Boolean',
            'boolean',
            'Undefined',
            'undefined'
        ],
        'id-match': 'error',
        'import/no-default-export': 'error',
        'import/no-unassigned-import': 'error',
        'import/order': 'error',
        'indent': common.INDENT,
        'jsdoc/check-alignment': 'error',
        // 'jsdoc/check-indentation': 'error', // disabled
        // 'jsdoc/newline-after-description': 'error', // to be enabled later
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-classes-per-file': [
            'error',
            1
        ],
        'max-len': [
            'error',
            {
                code: 135
            }
        ],
        'max-lines': [
            'error',
            750
        ],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': [
            'error',
            {
                allow: [
                    'warn',
                    'error',
                    'dir',
                    'time',
                    'timeEnd',
                    'timeLog',
                    'trace',
                    'assert',
                    'clear',
                    'count',
                    'countReset',
                    'group',
                    'groupEnd',
                    'table',
                    'debug',
                    'info',
                    'dirxml',
                    'groupCollapsed',
                    'Console',
                    'profile',
                    'profileEnd',
                    'timeStamp',
                    'context'
                ]
            }
        ],
        'no-debugger': 'error',
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        'no-empty-function': common.NO_EMPTY_FUNC,
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-invalid-this': 'error',
        'no-irregular-whitespace': 'error',
        'no-magic-numbers': 'off',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1
            }
        ],
        'no-new-wrappers': 'error',
        'no-null/no-null': 'off',
        'no-redeclare': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all'
            }
        ],
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ],
        'no-undef-init': 'error',
        'no-underscore-dangle': 'off',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': common.NO_UNUSED_VARS,
        'no-unused-labels': 'error',
        'no-var': 'error',
        'no-param-reassign': [
            'off'
            // , {
            //     props: true,
            //     ignorePropertyModificationsForRegex: ['^_']
            // }
        ],
        'object-shorthand': 'error',
        'one-var': [
            'error',
            'never'
        ],
        'prefer-arrow/prefer-arrow-functions': [
            'warn',
            {
                // https://github.com/TristonJ/eslint-plugin-prefer-arrow#configuration
                disallowPrototype: true,
                singleReturnOnly: false,
                // classPropertiesAllowed: false,
                allowStandaloneDeclarations: true
            }
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all'
            }
        ],
        'prefer-object-spread': 'error',
        'quote-props': [
            'error',
            'consistent-as-needed',
            {
                numbers: true,
                keywords: true
            }
        ],
        'quotes': common.QUOTES,
        'radix': 'error',
        'semi': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/']
            }
        ],
        'unicorn/prefer-switch': [
            'error',
            {
                minimumCases: 4
            }
        ],
        'unicorn/prefer-ternary': 'error',
        'use-isnan': 'error',
        'yoda': 'error'
    }
};
