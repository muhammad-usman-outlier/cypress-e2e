const express = require("express");
const cypress = require("cypress");

const app = express();

app.get("/run-test", cypressController);

async function cypressController(req, res) {
  try {
    cypress
      .run({
        config: {},
        env: {},
      })
      .then(console.log);
    res.json({
      msg: "test running",
    });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = (opts = {}, cb) => {
  const port = opts.port || 3000;
  return app.listen(port, cb);
};
