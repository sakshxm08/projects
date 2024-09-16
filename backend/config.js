const dotenv = require("dotenv");
const path = require("path");

// Load base .env file
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Load environment-specific .env file
dotenv.config({
  path: path.resolve(
    __dirname,
    `.env.${process.env.NODE_ENV || "development"}`
  ),
  override: true,
});

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  AWS: {
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
  },
};
