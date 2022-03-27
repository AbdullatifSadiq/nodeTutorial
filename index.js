const Logger = require('./logger')
const fs = require('fs')
const path = require('path')


const logger = new Logger()

logger.on('message', data => console.log('Called Listener',data))

logger.log('Hello world')

fs.writeFile(path.join(__dirname,'/test','logs.txt'),logger.log('Hello World'), err => {
     if(err) throw err
     console.log('File written to....')
})
 
     