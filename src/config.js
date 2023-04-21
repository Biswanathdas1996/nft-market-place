import { getConfigData } from "./getConfigaration";
// const getConfigDataVaues = getConfigData();

const openseaBaseUrl = "https://testnets.opensea.io";

export const getApiKey = () => {
  return "WCVDU52748WW4F7EKDEDB89HKH41BIA4N2";
};

export const getBaseApiUrl = () => {
  return "https://api-sepolia.etherscan.io/api";
};

export const getNetworkName = () => {
  return "sepolia";
};

export const openSeaURI = (address, tokenId) => {
  return `${openseaBaseUrl}/assets/${getNetworkName()}/${address}/${tokenId}/?force_update=true`;
};

export const networkURL = () => {
  return "https://sepolia.etherscan.io";
};

export const getTransctionListAPI = (account) => {
  return `${getBaseApiUrl()}?module=account&action=txlist&address=${account}&sort=desc&page=1&offset=10&apikey=${getApiKey()}`;
};

export const getContractTransctionListAPI = (contractAddress) => {
  return `${getBaseApiUrl()}?module=account&action=tokennfttx&contractaddress=${contractAddress}&page=1&offset=10000&sort=asc&apikey=${getApiKey()}`;
};
