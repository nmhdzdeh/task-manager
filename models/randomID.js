const crypto = require("crypto");

function generateRandomId(length = 8) {
  return crypto.randomBytes(length / 2).toString("hex");
}

module.exports = generateRandomId;
