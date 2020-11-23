const http = require('http')
if (
  process.argv.length < 3 ||
  typeof process.argv[2] !== 'number'
) {
  throw new Error('Please input Port Number')
}
const port = process.argv[2]

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Typre': 'text/html; charset=utf-8'})
  res.write('<h1>Hello World</h1>')
  res.end()
})

server.listen(port)
console.log('Server listen on port ' + port);
