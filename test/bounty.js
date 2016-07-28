contract('Bounty', function(accounts) {
    it("should set the owner as the caller", function(){
        var bounty = Bounty.deployed();

        return bounty.bountyOwner.call().then(function(bountyOwner){
            assert.equal(bountyOwner, accounts[0], "owner is not first account");
        });
    });

    it("should set the project and issue", function(){
        var bounty = Bounty.deployed();

        return bounty.getProjectAndIssue.call().then(function(output){
            project = output[0];
            issue = output[1];
            assert.equal(project, "project-name", "project does not match");
            assert.equal(issue, "42", "issue does not match");
        });
    });

    it("should store the ether it is created with", function(){
        var bounty = Bounty.deployed();

        return bounty.payoutAmount.call().then(function(amount){
            assert.equal(amount, web3.toWei(1, "ether"), "ether was not stored");
        });
    });
});
