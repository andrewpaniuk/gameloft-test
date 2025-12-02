import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import stylistic from '@stylistic/eslint-plugin'
import fsdRules from './eslint-rules/fsd-rules.js'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    ...fsdRules,
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            semi: ['error', 'never'],
            '@stylistic/indent': 'off',
            '@stylistic/jsx-indent': ['error', 4],
            '@stylistic/jsx-indent-props': ['error', 4],
            '@stylistic/jsx-quotes': ['error', 'prefer-single'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/jsx-tag-spacing': [
                'error',
                {
                    beforeSelfClosing: 'always',
                },
            ],
            'react/jsx-curly-brace-presence': [
                'error',
                { props: 'never', children: 'never' },
            ],
            'indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
            'react/jsx-first-prop-new-line': ['error', 'multiline'],
            'react/prefer-stateless-function': 'error',
            'react/no-unused-prop-types': 'error',
            'react/jsx-pascal-case': 'error',
            'react/jsx-no-script-url': 'error',
            'react/no-children-prop': 'error',
            'react/no-danger-with-children': 'error',
            'react/no-unstable-nested-components': [
                'error',
                { allowAsProps: true },
            ],
            'react/jsx-fragments': 'error',
            'react/destructuring-assignment': [
                'error',
                'always',
                { destructureInSignature: 'always' },
            ],
            'react/function-component-definition': [
                'warn',
                { namedComponents: 'arrow-function' },
            ],
            'react/jsx-key': [
                'error',
                {
                    checkFragmentShorthand: true,
                    checkKeyMustBeforeSpread: true,
                    warnOnDuplicates: true,
                },
            ],
            'react/jsx-no-useless-fragment': 'warn',
            'react/jsx-boolean-value': ['error', 'never'],
            'react/no-typos': 'warn',
            'react/display-name': 'warn',
            'react/no-unescaped-entities': 'off',
            'react/jsx-sort-props': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-one-expression-per-line': 'off',
            'react/prop-types': 'off',
            'react/jsx-newline': [2, { prevent: true, allowMultilines: false }],
            'react/jsx-closing-tag-location': ['error', 'tag-aligned'],
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
    // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
])

export default eslintConfig
