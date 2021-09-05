// Fetch the LootAlchemy contract data from the LootAlchemy.json file
var Storage = artifacts.require("./alchemy.sol");

// JavaScript export
module.exports = function(deployer) {
    // Deployer is the Truffle wrapper for deploying
    // contracts to the network

    // Deploy the contract to the network
    deployer.deploy(LootAlchemy);
}