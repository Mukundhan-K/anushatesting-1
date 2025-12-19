const jwt = require("jsonwebtoken");

async function generateToken(data) {
  return jwt.sign(
    {...data},
    process.env.AUTH_TOKEN,
    {expiresIn : "60m"}
  );
};

module.exports = generateToken;