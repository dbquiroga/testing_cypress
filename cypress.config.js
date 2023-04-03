const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000, //10seg
    watchForFileChanges: false,
    'baseUrl': 'https://pushing-front.vercel.app/',
    "video": true,
    "videosFolder": "cypress/videos",
    "screenshotOnRunFailure": true,
    "screenshotsFolder": "cypress/screenshots",
  },
});

