const express = require("express");
const cypress = require("cypress");

const app = express();

app.post("/run-test", cypressController);

async function cypressController(req, res) {
  req.setTimeout(30000)
  const results = await cypress.run({
    config: {},
    env: {},
  });

  console.log(results);

  res.json(results);
}

module.exports = (opts = {}, cb) => {
  const port = opts.port || 3000;
  return app.listen(port, cb);
};
