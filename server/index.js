const express = require("express");
const cypress = require("cypress");

const app = express();

app.get("/run-test", cypressController);

async function cypressController(req, res) {
  res.json({
    status: "test execution started",
  });

  cypress
    .run({
      config: {},
      env: {},
    })
    .then(console.log)
    .catch(console.log);
}

module.exports = (opts = {}, cb) => {
  const port = opts.port || 3000;
  return app.listen(port, cb);
};
