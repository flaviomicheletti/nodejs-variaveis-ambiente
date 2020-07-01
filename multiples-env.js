'use strict';

const { config } = require('dotenv');

const getEnvFile = (enviromnet) => {
    switch (enviromnet) {
        case "test":
            ".env.test"
            break;
        case "dev":
            ".env.development"
            break;
        case "homol":
            ".env.qa"
            break;
        case "prod":
            ".env.production"
            break;
        default:
            ".env"
            break;
    }
}

config({
    path: getEnvFile(process.env.NODE_ENV)
});

console.log(process.env.NODE_ENV);
