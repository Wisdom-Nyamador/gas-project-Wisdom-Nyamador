// eslint.config.mjs
export default [
  {
    files: ["src/**/*.js"],
    env: {
      node: true,      // Provides require, module, exports, process, __dirname, __filename
      es2021: true
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script"  // Important for CommonJS
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off" // allow require()
    }
  }
];
