// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
  uint256 private value;

  // Emitted when the stored value changes
  event RateChanged(uint256 newValue, uint256 oldValue);

  // Stores a new value in the contract
  function store(uint256 newValue) public onlyOwner {
    uint256 val = value;
    value = newValue;
    emit RateChanged(newValue, val);
  }

  // Reads the last stored value
  function retrieve() public view returns (uint256) {
    return value;
  }
}
