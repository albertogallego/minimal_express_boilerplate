const env = process.env.NODE_ENV;
require("dotenv").config();

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 3000
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || "db"
  },
  secret: process.env.APP_SECRET
};
const staging = {
  app: {
    port: parseInt(process.env.STAGING_APP_PORT) || 3000
  },
  db: {
    host: process.env.STAGING_DB_HOST || "localhost",
    port: parseInt(process.env.STAGING_DB_PORT) || 27017,
    name: process.env.STAGING_DB_NAME || "test"
  },
  secret: process.env.APP_SECRET
};

const config = {
  dev,
  staging
};

module.exports = config[env];
