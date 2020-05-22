const dgram = require('dgram')
const PORT = 6000
const HOST = '18.163.219.105'

module.exports = {
  send (message, cb) {
    const client = dgram.createSocket('udp4')
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
      if (err) {
        if (cb) {
          cb(err)
        }
      } else {
        console.log(`send message: ${message}`)
        if (cb) {
          cb(null)
        }
      }
      client.close()
    })
  }
}
