'use strict'

const redis = require('redis')

module.exports = class Redis {
  constructor() {
    this.redis = redis.createClient()
    this.redis.on('error', function (err) {
      throw err
    })
  }

  setData (data) {
    const client = this.redis

    client.exists(data.key, function (err, reply) {
      if (reply !== 1) {
        client.hmset(data.key, data.value, function(err, res) {
          console.log('redis set succcess')
          client.quit()
        })
      } else {
         console.log('redis key exists')
         client.quit()
      }
    })
  }

  getData () {
    const client = this.redis
    client.hgetall('frameworks', function(err, result) {
      console.log('redis get', result)
      client.quit()
    })
  }
}
