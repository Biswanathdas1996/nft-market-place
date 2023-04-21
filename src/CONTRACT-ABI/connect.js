import _ from "lodash";
import Web3 from "web3";
import ABI from "./NFT.json";
import Address from "./Address";
window?.ethereum?.request({
  method: "eth_requestAccounts",
});

const web3 = new Web3(window?.ethereum);

export const getcurrentNetworkId = async () => {
  let networkId;
  try {
    networkId = await web3?.eth?.accounts?._ethereumCall?.getNetworkId();
  } catch (err) {
    networkId = undefined;
    console.error("___web3 not found___", err);
  }

  return networkId;
};

export const getContractAddress = (networkID) => {
  switch (networkID?.toString()) {
    case "80001":
      return Address.polygon;
    case "5":
      return Address.goerli;
    case "4":
      return Address.rinkeby;
    case "11155111":
      return Address.sapolia;
    default:
    // code block
  }
};

const getContract = async () => {
  const networkId = await web3?.eth?.accounts?._ethereumCall?.getNetworkId();
  sessionStorage.setItem("currentyNetwork", networkId);
  const ADDRESS = getContractAddress(networkId);
  const contract = ADDRESS && new web3.eth.Contract(ABI, ADDRESS);
  return contract;
};

export const _transction = async (service, ...props) => {
  const callService = _.get(await getContract(), ["methods", service]);
  const accounts = await web3.eth.getAccounts();
  const responseData = await callService(...props)
    .send({
      from: accounts[0],
      value: 0,
    })
    .then((data) => data)
    .catch((error) => {
      const errorData = { error };
      return { error: errorData.error };
    });
  return responseData;
};

export const _paid_transction = async (cost, service, ...props) => {
  const callService = _.get(await getContract(), ["methods", service]);
  const accounts = await web3.eth.getAccounts();
  const responseData = await callService(...props)
    .send({
      from: accounts[0],
      value: cost,
    })
    .then((data) => data)
    .catch((error) => {
      const errorData = { error };
      return { error: errorData.error };
    });
  return responseData;
};

export const _account = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
};

export const _fetch = async (service, ...props) => {
  const callService = _.get(await getContract(), ["methods", service]);
  let data;
  if (props) {
    data = await callService(...props).call();
  } else {
    data = await callService().call();
  }

  return data;
};
