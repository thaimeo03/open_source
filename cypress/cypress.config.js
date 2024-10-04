const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://blog-btl-client.vercel.app",
    defaultCommandTimeout: 10000, // Can be change (default is 4000 if not specified)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
