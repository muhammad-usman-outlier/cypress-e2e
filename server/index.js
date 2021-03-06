const express = require('express')
const cypress = require('cypress')

const app = express()

app.get('/', (_req, res) => {
  res.json({ success: true })
})

app.post('/run-test', cypressController)

async function cypressController(req, res) {
  req.setTimeout(3600000)
  const results = await cypress.run({
    config: {},
    env: {},
  })

  console.log(results)

  res.json(results)
}

module.exports = (opts = {}, cb) => {
  const port = opts.port || 3000
  return app.listen(port, cb)
}
