import { getConfigData } from "./getConfigaration";
const getConfigDataVaues = getConfigData();

const openseaBaseUrl = getConfigDataVaues?.opensea_base_url;

export const getApiKey = () => {
  return getConfigDataVaues?.ChainExplorerAPIKEY;
};

export const getBaseApiUrl = () => {
  return getConfigDataVaues?.blockchain_base_api;
};

export const getNetworkName = () => {
  return getConfigDataVaues?.network_name;
};

export const openSeaURI = (address, tokenId) => {
  return `${openseaBaseUrl}/assets/${getNetworkName()}/${address}/${tokenId}/?force_update=true`;
};

export const networkURL = () => {
  return getConfigDataVaues?.network_url;
};

export const getTransctionListAPI = (account) => {
  return `${getBaseApiUrl()}?module=account&action=txlist&address=${account}&sort=desc&page=1&offset=10&apikey=${getApiKey()}`;
};

export const getContractTransctionListAPI = (contractAddress) => {
  return `${getBaseApiUrl()}?module=account&action=tokennfttx&contractaddress=${contractAddress}&page=1&offset=10000&sort=asc&apikey=${getApiKey()}`;
};
