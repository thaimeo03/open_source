const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://blog-btl-client.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
