let os = require("os");

module.exports = {
  skipJsErrors: true,
  hostname: os.hostname(),
  pageRequestTimeout: 8000,
  pageLoadTimeout: 10000,
}
