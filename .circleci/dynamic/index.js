const path = require("path");
const writeNodeConfig = require("@bufferings/hello-circleci-config-sdk");

writeNodeConfig("/v.*/", path.join(__dirname, "../dynamicConfig.yml"));
