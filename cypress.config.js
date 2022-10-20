const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video:false,
    experimentalStudio: true,
    baseUrl: 'https://example.cypress.io/todo',
    reporter: 'mocha-allure-reporter',
    excludeSpecPattern: 'cypress/e2e/2-advanced-examples/*.js',
    specPattern: 'cypress/e2e/**/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
