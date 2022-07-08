export const EtherscanBaseAPI = `https://api-rinkeby.etherscan.io/api`;
export const EtherscanAPIKEY = `WCVDU52748WW4F7EKDEDB89HKH41BIA4N2`;

export const RinkebyStorageAddress =
  "0xE2648EFc2b1705a808057ac381e89A36af49f14b";
export const RinkebyAuctionAddress =
  "0xBDbe53A0197928F0D3a82E27eA3e36fe4194D06C";
export const RinkebyNftAddress = "0x3ed3Cf2eB24d8eC5E85D6Ae02C63A8ddc640D51A";

// --------------------------------------------------------------------------------

export const openSeaURI = (address, tokenId) => {
  const networkId = sessionStorage.getItem("currentyNetwork");
  let network;
  if (networkId === "80001") {
    network = "mumbai";
  } else if (networkId === "4") {
    network = "rinkeby";
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
  }
  return network;
};
