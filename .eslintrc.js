javascript
   module.exports = {
     env: {
       browser: true,
       es2021: true,
     },
     extends: [
       "eslint:recommended",
       "plugin:@typescript-eslint/recommended",
       "plugin:prettier/recommended",
     ],
     parser: "@typescript-eslint/parser",
     parserOptions: {
       ecmaVersion: 12,
       sourceType: "module",
     },
     plugins: [
       "svelte3",
       "@typescript-eslint",
     ],
     overrides: [
       {
         files: ["*.svelte"],
         processor: "svelte3/svelte3",
       },
     ],
     ignorePatterns: ["public/build/", "node_modules/"],
     rules: {
       // Additional ESLint rules can be added here
     },
     settings: {
       "svelte3/typescript": true,
     },
   };