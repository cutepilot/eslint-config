'use strict';
const path = require('path');
const common = require(path.join(__dirname, '_common.js'));

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // From VSCode website: This means that ESLint rules can use semantic
    // information, for example, is this variable a string or a
    // number-array? This configuration enables some powerful rules but
    // means that ESLint takes much longer to compute. The default rules for
    // extensions do not require semantic information and unless you have
    // added rules that do, we recommend you remove the
    // parserOptions.project property.
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    path.join(__dirname, 'index.js'),
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 5,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Use {} instead.',
          },
          String: null,
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    indent: 'off',
    '@typescript-eslint/indent': common.INDENT,
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'signature',
          'static-field',
          'field',
          'instance-field',
          'constructor',
          'static-get',
          'get',
          'instance-get',
          'instance-method',
          'method',
          'static-method'
        ]
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      // enforce that boolean variables are prefixed with an allowed verb
      // {
      //     selector: 'variable',
      //     types: ['boolean'],
      //     format: ['camelCase']
      //     prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'does', 'toBe']
      // },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      // ignore format for properties that require quotes
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      common.NO_EMPTY_FUNC[0],
      {
        allow: [
          ...common.NO_EMPTY_FUNC[1].allow,
          'private-constructors',
          'protected-constructors',
          'decoratedFunctions',
        ],
      },
    ],

    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        // if true, auto-fixing will be made available in which the
        // 'any' type is converted to an 'unknown' type
        fixToUnknown: true,
        // specify if arrays from the rest operator are considered okay
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreProperties: true,
        ignoreParameters: true
      },
    ],

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error'],

    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        ignoreDeclarationMerge: false,
      },
    ],
    '@typescript-eslint/no-require-imports': 'error',
    // https://stackoverflow.com/a/63961972/112731
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreTypeValueShadow: false,
        ignoreFunctionTypeParameterNameValueShadow: false,
      },
    ],
    '@typescript-eslint/no-this-alias': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': common.NO_UNUSED_VARS,

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    quotes: 'off',
    '@typescript-eslint/quotes': common.QUOTES,

    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowExpressions': true,
        'allowTypedFunctionExpressions': true,
        'allowHigherOrderFunctions': true,
        'allowDirectConstAssertionInArrowFunctions': true,
        'allowConciseArrowFunctionExpressionsStartingWithVoid': false
      }
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        parameter: true,
        memberVariableDeclaration: true,
      },
    ],
    'arrow-body-style': 'off',
  },
};
