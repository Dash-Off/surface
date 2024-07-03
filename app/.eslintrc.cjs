module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'prettier/prettier': 'error', // Integrate Prettier for code formatting
    'react/jsx-uses-react': 'off', // Suppress errors for unused React imports (from React 17+)
    'react/react-in-jsx-scope': 'off', // Suppress errors for missing React in scope (from React 17+)
    'react/prop-types': 'off', // Disable prop-types as we're using TypeScript
    'no-console': 'warn', // Warn on console statements
    'no-unused-vars': 'warn', // Warn on unused variables
    'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.js', '.tsx'] }], // Allow JSX in .jsx and .tsx files
    'jsx-a11y/anchor-is-valid': 'off', // Disable anchor validity check
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
