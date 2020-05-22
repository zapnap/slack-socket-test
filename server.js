const http = require('http')

const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const SocketIO = require('socket.io')

const port = process.env.PORT || 3000
const isProd = process.env.NODE_ENV === 'production'

const app = express()
const server = http.createServer(app)
const io = SocketIO(server)

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
config.dev = !isProd

const nuxt = new Nuxt(config)
// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)

// Listen the server
server.listen(port, '0.0.0.0')
console.log('Server listening on localhost:' + port) // eslint-disable-line no-console

// Socket.io
const messages = []
io.on('connection', (socket) => {
  socket.on('last-messages', function (fn) {
    fn(messages.slice(-50))
  })
  socket.on('send-message', function (message) {
    messages.push(message)
    socket.broadcast.emit('new-message', message)
  })
})
