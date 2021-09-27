pragma solidity ^0.5.17;

contract RewardsDistributionRecipient {
    address public rewardsDistribution;

    function notifyRewardAmount() payable external;

    modifier onlyRewardsDistribution() {
        require(msg.sender == rewardsDistribution, "Caller is not RewardsDistribution contract");
        _;
    }
}