const EtherscanBaseAPI = `https://api-rinkeby.etherscan.io/api`;
const EtherscanGoerliBaseAPI = `https://api-goerli.etherscan.io/api`;
const PolyscanscanBaseAPI = `https://api-testnet.polygonscan.com/api`;

const EtherscanAPIKEY = `WCVDU52748WW4F7EKDEDB89HKH41BIA4N2`;
const PolyscanscanAPIKEY = `G2FQ3WI7SWZDIEQE8CCCSZHJ1M97NXNYAE`;

const openseaBaseUrl = "https://testnets.opensea.io";

// --------------------------------------------------------------------------------
export const getApiKey = () => {
  const networkId = sessionStorage.getItem("currentyNetwork");
  switch (networkId) {
    case "80001":
      return PolyscanscanAPIKEY;
    default:
      return EtherscanAPIKEY;
  }
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

export const getNetworkName = () => {
  const networkId = sessionStorage.getItem("currentyNetwork");
  switch (networkId) {
    case "80001":
      return "mumbai";
    case "4":
      return "rinkeby";
    case "5":
      return "goerli";
    default:
      return "unknown";
  }
};

export const openSeaURI = (address, tokenId) => {
  return `${openseaBaseUrl}/assets/${getNetworkName()}/${address}/${tokenId}/?force_update=true`;
};

export const networkURL = () => {
  const networkId = sessionStorage.getItem("currentyNetwork");
  switch (networkId) {
    case "80001":
      return `https://${getNetworkName()}.polygonscan.com`;
    default:
      return `https://${getNetworkName()}.etherscan.io`;
  }
};

export const getTransctionListAPI = (account) => {
  return `${getBaseApiUrl()}?module=account&action=txlist&address=${account}&sort=desc&page=1&offset=10&apikey=${getApiKey()}`;
};

export const getContractTransctionListAPI = (contractAddress) => {
  return `${getBaseApiUrl()}?module=account&action=tokennfttx&contractaddress=${contractAddress}&page=1&offset=10000&sort=asc&apikey=${getApiKey()}`;
};
