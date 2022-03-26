const url = require('url')

const myUrl = new URL ('http://mywebsitecom/hello.html?id=100&status=active')

// Serialized URL 
console.log(myUrl.href)

// Host or root domain
console.log(myUrl.host)