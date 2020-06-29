const dotenv = require("dotenv");
dotenv.config();

let port;
let mongodbUri;

switch (process.env.NODE_ENV) {
    case "local":
        port = process.env.LOCAL_PORT;
        mongodbUri = process.env.LOCAL_MONGODB_URI

        break;

    case "staging":
        port = process.env.STAGING_PORT;
        mongodbUri = process.env.STAGING_MONGODB_URI
        break;
}

module.exports={
    port,mongodbUri
}