const fs = require('fs')
// const { dirname } = require('path')
const path = require('path')


// Creatig a folder
fs.mkdir(path.join(__dirname,'/test'),{}, err => {
    if(err) throw err
    console.log('Folder created....')
})