const EventEmmiter = require('events')
const uuid = require('uuid')

class Logger extends EventEmmiter {
    log(msg){
        // Call event
        this.emit('message', {id:uuid.v4(),msg})
    }
}

// module.exports = Logger
const logger = new Logger()

logger.on('message', data => console.log('Called Listener',data))

logger.log('Hello world')

// fs.writeFile(path.join(__dirname,'/test','logs.txt'),logger.log('Hello World'), err => {
//      if(err) throw err
//      console.log('File written to....')
// })