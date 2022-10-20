const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    video:false,
    experimentalStudio: true,
    chromeWebSecurity: false,
    //baseUrl: 'https://example.cypress.io/todo',
    reporter: 'mocha-allure-reporter',
    excludeSpecPattern: 'cypress/e2e/2-advanced-examples/*.js',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    setupNodeEvents
  },
});