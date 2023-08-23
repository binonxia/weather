const express = require('express')
const { route } = require('./api')
const app = express()
const port = 3000

// 允许来自所有域的跨域请求
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

route(app)