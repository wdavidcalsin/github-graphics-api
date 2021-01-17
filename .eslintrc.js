// module.exports = {
//     parser: '@typescript-eslint/parser',
//     extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
//     parserOptions: {
//         ecmaVersion: 2018,
//         sourceType: 'module',
//         ecmaFeatures: {
//             jsx: true
//         }
//     },
//     rules: {},
//     settings: {
//         react: {
//             version: 'detect'
//         }
//     }
// };

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    settings: {
        react: {
            version: 'detect'
        }
    }
};
