const path = require("path");
const config = require("@bufferings/hello-circleci-config-sdk");

config.writeNodeConfig("/v.*/", path.join(__dirname, "../dynamicConfig.yml"));
