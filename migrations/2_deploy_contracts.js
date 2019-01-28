var RailCoin = artifacts.require("./RailCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(RailCoin);
};
