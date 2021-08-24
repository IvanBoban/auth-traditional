import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  auth: {
    token: process.env.AUTH_TOKEN,
  },
  session: {
    sessionSecret: process.env.SESSION_SECRET,
    keySecret: process.env.KEY_SECRET,
  },
  mongo: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    password: process.env.MONGO_PASSWORD,
  },
};
