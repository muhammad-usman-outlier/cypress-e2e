const { name } = require("./package.json");

const PORT = process.env.PORT || 1337;

require("./server")({ port: PORT }, () => {
  console.log(`${name} listening on port ${PORT}`);
});
