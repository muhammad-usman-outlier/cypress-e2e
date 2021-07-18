const express = require("express");
const cypress = require("cypress");

const app = express();

app.get("/run-test", cypressController);

async function cypressController(req, res) {
  try {
    const results = await cypress.run({
      config: {},
      env: {},
    });
    res.json(results)
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = (opts = {}, cb) => {
  const port = opts.port || 3000;
  return app.listen(port, cb);
};
