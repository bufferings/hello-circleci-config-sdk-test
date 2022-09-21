const config = require("@bufferings/hello-circleci-config-sdk");

console.log(__dirname + "/dynamicConfig.yml")
config.writeNodeConfig("v.*", __dirname + "../dynamicConfig.yml");
