// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


contract Config {
    
   struct ConfigData {
       string data;
    }

    ConfigData public collections;

    constructor() {}  

     function _setNftCollection(
        string memory data
     ) public {
       ConfigData memory newCollection = ConfigData({
            data: data
        });
       collections = newCollection;
    }

    function getCollection() public view returns ( ConfigData memory) {
        return collections;
    }
  
}