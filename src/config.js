export const EtherscanBaseAPI = `https://api-rinkeby.etherscan.io/api`;
export const EtherscanGoerliBaseAPI = `https://api-goerli.etherscan.io/api`;
export const PolyscanscanBaseAPI = `https://api-testnet.polygonscan.com/api`;
export const EtherscanAPIKEY = `WCVDU52748WW4F7EKDEDB89HKH41BIA4N2`;
export const PolyscanscanAPIKEY = `G2FQ3WI7SWZDIEQE8CCCSZHJ1M97NXNYAE`;

// --------------------------------------------------------------------------------

export const openSeaURI = (address, tokenId) => {
  const networkId = sessionStorage.getItem("currentyNetwork");
  let network;
  switch (networkId) {
    case "80001":
      network = "mumbai";
      break;
    case "4":
      network = "rinkeby";
      break;
    case "5":
      network = "goerli";
      break;
    default:
    // code block
  }
  return `https://testnets.opensea.io/assets/${network}/${address}/${tokenId}/?force_update=true`;
};

export const networkURL = () => {
  const networkId = sessionStorage.getItem("currentyNetwork");
  let network;
  if (networkId === "80001") {
    network = "https://mumbai.polygonscan.com";
  } else if (networkId === "4") {
    network = "https://rinkeby.etherscan.io";
  } else if (networkId === "5") {
    network = "https://goerli.etherscan.io";
  }
  return network;
};

export const getTransctionListAPI = (account) => {
  return `${getBaseApiUrl()}?module=account&action=txlist&address=${account}&sort=desc&page=1&offset=10&apikey=${EtherscanAPIKEY}`;
};

export const getContractTransctionListAPI = (contractAddress) => {
  return `${getBaseApiUrl()}?module=account&action=tokennfttx&contractaddress=${contractAddress}&page=1&offset=10000&sort=asc&apikey=${EtherscanAPIKEY}`;
};

export const getBaseApiUrl = () => {
  const networkId = sessionStorage.getItem("currentyNetwork");
  switch (networkId) {
    case "80001":
      return PolyscanscanBaseAPI;
    case "4":
      return EtherscanBaseAPI;
    case "5":
      return EtherscanGoerliBaseAPI;
    default:
    // code block
  }
};
