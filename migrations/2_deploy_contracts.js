const SampleToken = artifacts.require("SampleToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken,"Agam", "ACoin", 100000);
};
