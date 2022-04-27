import React from "react";

const Web3Context = React.createContext({
  user: undefined,
  contractInstance: undefined,
  networkId: undefined,
  networkType: undefined,
  web3: undefined,
  transactions: [],
  miningStatus: true,
  description: undefined,
  balance: undefined,
  title:"",
  
});
console.log("web3Context", Web3Context.balance);

export default Web3Context;

