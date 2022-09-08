import Web3 from "web3";
import { encode, decode } from "js-base64";

const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "_setNftCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collections",
    outputs: [
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCollection",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
        ],
        internalType: "struct Config.ConfigData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const ADDRESS = "0xF7896db32E6024A36406A18d0432C641Ae07e8b3";

var InfuraNodeURL = `https://rinkeby.infura.io/v3/24022fda545f41beb59334bdbaf3ef32`;
var WalletPrivateKey =
  "33e8389993eea0488d813b34ee8d8d84f74f204c17b95896e9380afc6a514dc7";

const web3 = new Web3(new Web3.providers.HttpProvider(InfuraNodeURL));
const signer = web3.eth.accounts.privateKeyToAccount(WalletPrivateKey);
web3.eth.accounts.wallet.add(signer);
const contract = new web3.eth.Contract(ABI, ADDRESS);

export function getConfigData() {
  return JSON.parse(decode(sessionStorage.getItem("x-nft-config-token")));
}

export async function updateConfigData() {
  const response = await contract.methods
    .getCollection()
    .call({ from: signer.address });
  sessionStorage.setItem("x-nft-config-token", response.data);
}

export async function setConfigData(data) {
  const encodedData = encode(JSON.stringify(data));
  const transction = await contract.methods
    ._setNftCollection(encodedData)
    .send({
      from: signer.address,
      gas: "4700000",
      value: 0,
    })
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(txhash);
    })
    .catch((error) => {
      console.log(error);
    });
  return transction;
}
