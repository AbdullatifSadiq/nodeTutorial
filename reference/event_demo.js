const Eventemitter = require('events')

// Create a class
class MyEmitter extends Eventemitter {}


// Init object
const myEmitter = new MyEmitter()

// Event Listener
myEmitter.on('event', ()=> console.log('event fired'))

// Init Event
myEmitter.emit('event')
