const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://random-dex-qa-api.hqdemo.com",   // Change to your app/api base URL
    setupNodeEvents(on, config) {
      // place to add plugins, webpack config, or tasks if needed
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,ts}"  // Recommended spec pattern
  },
});
