// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalSmiles;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function smile() public {
        totalSmiles += 1;
        console.log("%s has smiled!", msg.sender);
    }

    function getTotalSmiles() public view returns (uint256) {
        console.log("We have %d total smiles!", totalSmiles);
        return totalSmiles;
    }
}

