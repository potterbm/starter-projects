const { createReadStream } = require("fs");
const path = require("path");

module.exports = function () {
  return async function (context, next) {
    context.type = "html";
    context.body = createReadStream(
      path.resolve(__dirname, "../public/index.html")
    );
  };
};
