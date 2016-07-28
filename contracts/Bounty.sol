contract Bounty {
    address public bountyOwner;
    uint public payoutAmount;
    string public projectName;
    string public issueNum;


    function Bounty(string _projectName, string _issueNum) {
        // constructor
        projectName = _projectName;
        issueNum = _issueNum;
        bountyOwner = msg.sender;
        payoutAmount = msg.value;
    }


    function getProjectAndIssue() returns (string project, string issue) {
        return (projectName, issueNum);
    }

}
