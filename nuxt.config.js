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
  env: {
    WS_URL: process.env.WS_URL || 'http://localhost:3000'
  }
}
