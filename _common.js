'use strict';

module.exports = {
  QUOTES: [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
  ],
  INDENT: [
    'warn',
    2,
    {
      // ignoredNodes: [],
      ArrayExpression: 1,
      CallExpression: { arguments: 1 },
      flatTernaryExpressions: false,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      ignoreComments: false,
      ImportDeclaration: 1,
      MemberExpression: 1,
      ObjectExpression: 1,
      offsetTernaryExpressions: false,
      outerIIFEBody: 'off',
      SwitchCase: 1,
      VariableDeclarator: 'first'
    }
  ],
  NO_UNUSED_VARS: [
    'error',
    {
      vars: 'all',
      argsIgnorePattern: '(^_|[Ii]gnore)',
      varsIgnorePattern: '(^_|[Ii]gnore)',
      args: 'after-used',
      ignoreRestSiblings: true,
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '(^_|[Ii]gnore)'
    },
  ],
  NO_EMPTY_FUNC: [
    'error',
    {
      allow: [
        'arrowFunctions',
        'generatorFunctions',
        'generatorMethods',
        'constructors'
      ]
    }
  ]
};
