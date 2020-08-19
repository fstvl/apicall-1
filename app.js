const request = require('request');
const express = require('express')
const app = express()
const port = 4000

request('http://23.96.17.185:3000/', function (error, response, body) {
    app.get('/', (req, res) => {
    res.send(body)
})
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

