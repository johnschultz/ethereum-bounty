module.exports = function(deployer) {
    deployer.deploy(Bounty, "project-name", "42", {value: web3.toWei(1, "ether")});
};
