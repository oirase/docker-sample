'use strict'

const http = require('http')
const express = require('express')
const app = express()

if (
  process.argv.length < 3 ||
  isNaN(process.argv[2])
) {
  throw new Error('Please input Port Number')
}
const port = process.argv[2]

app.use('/', (req, res) => {
  res.send("node hello")
})
app.listen(port, '0.0.0.0', () => {
  console.log('Server listen on port ' + port);
})
