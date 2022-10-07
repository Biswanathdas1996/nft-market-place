import { Web3Storage } from "web3.storage/dist/bundle.esm.min.js";
import { getConfigData } from "../getConfigaration";
const getConfigDataVaues = getConfigData();

const client = new Web3Storage({
  token: getConfigDataVaues?.Web3Storage,
});

export const uploadFileToIpfs = async (file) => {
  const fileName = file[0].name;
  const results = await client.put(file, {});

  // return `https://ipfs.io/ipfs/${results}/${fileName}`;
  return `https://${results}.ipfs.dweb.link/${fileName}`;
};

export const createAnduploadFileToIpfs = async (metaData) => {
  const blob = new Blob([JSON.stringify(metaData)], {
    type: "application/json",
  });
  const files = [new File([blob], "ipfs.json")];
  const resultsSaveMetaData = await client.put(files, {});
  // return `https://ipfs.io/ipfs/${resultsSaveMetaData}/ipfs.json`;
  return `https://${resultsSaveMetaData}.ipfs.dweb.link/ipfs.json`;
};

export const getIpfsUrI = (fingerprint) => {
  return `https://ipfs.io/ipfs/${fingerprint}`;
};
