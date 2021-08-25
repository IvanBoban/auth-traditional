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
    URI: process.env.MONGODBURI,
  },
};
