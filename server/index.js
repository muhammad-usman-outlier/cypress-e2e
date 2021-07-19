const express = require('express')
const cypress = require('cypress')

const app = express()

app.get('/run-test', cypressController)

async function cypressController (req, res) {
  try {
    res.json({
      status: 'test execution started'
    })

    const results = await cypress.run({
      config: {},
      env: {}
    })

    console.log(results)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = (opts = {}, cb) => {
  const port = opts.port || 3000
  return app.listen(port, cb)
}
