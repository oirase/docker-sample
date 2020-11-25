'use strict'

const http = require('http')
const express = require('express')
const app = express()
const RedisClass = require('./RedisClass.js')

app.use('/docker-sample/', (req, res) => {
  const Redis = new RedisClass()
  Redis.setData({
    key: 'frameworks',
    value: {
      'javascript': 'AngularJS',
      'css': 'Bootstrap',
      'node': 'Express'
    }
  })
  const result = Redis.getData()
  console.log(result)
  res.send("node hello")
})
app.listen(8080, () => {
  console.log('Server listen');
})
