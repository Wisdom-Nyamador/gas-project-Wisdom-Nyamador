// eslint.config.mjs
export default [
  {
    files: ["src/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script", // Important for CommonJS
      globals: {
        // Node.js globals (replacing env: { node: true })
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },

    rules: {
      "@typescript-eslint/no-require-imports": "off", // allow require()
    },
  },
];
