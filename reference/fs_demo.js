const fs = require('fs')
// const { dirname } = require('path')
const path = require('path')


// Creatig a folder
// fs.mkdir(path.join(__dirname,'/test'),{}, err => {
//     if(err) throw err
//     console.log('Folder created....')
// })

// Creating and writing to a file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World', err => {
//     if(err) throw err
//     console.log('File written to....')

//     // Appending to a
    // fs.appendFile(path.join(__dirname,'/test','hello.txt'),' I love Node', err => {
    //     if(err) throw err
    //     console.log('File written to....')
    // })
// })

// Read from a file
// fs.readFile(path.join(__dirname,'/test', 'hello.txt'),'utf8', (err,data) => {
//     if(err) throw err
//     console.log(data)
// })

// Rename File 
fs.rename(path.join(__dirname,'/test', 'hello.txt'),path.join(__dirname,'/test', 'helloword.txt'), (err,data) => {
    if(err) throw err
    console.log('File renamed...')
})