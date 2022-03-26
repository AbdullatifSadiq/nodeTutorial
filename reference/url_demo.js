const url = require('url')

const myUrl = new URL ('http://mywebsitecom/hello.html?id=100&status=active')

// Serialized URL 
console.log(myUrl.href)

// Host or root domain
console.log(myUrl.host)

// Hostname (doesnt include the port number)
console.log(myUrl.hostname)

// Path name / gives path name of file
console.log(myUrl.pathname)

// Serialzed query / gives everything after the question mark
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams)

// Adding params
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)
