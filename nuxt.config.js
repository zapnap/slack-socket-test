require('dotenv').config()

module.exports = {
  mode: 'universal',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: [
    '@nuxtjs/dotenv',
  ],
  env: {
    WS_URL: process.env.WS_URL || 'http://localhost:3000',
    slackBotToken: process.env.SLACK_BOT_TOKEN,
    slackSigningSecret: process.env.SLACK_SIGNING_SECRET
  }
}
