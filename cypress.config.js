const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: true,
})
