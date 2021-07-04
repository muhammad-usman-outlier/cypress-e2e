const cypress = require("cypress");

function onSuccess(testResults) {
  console.log(testResults);
}

cypress
  .run({
    config: {},
    env: {},
  })
  .then(onSuccess)
  .catch((error) => {
    throw new Error(error);
  });
