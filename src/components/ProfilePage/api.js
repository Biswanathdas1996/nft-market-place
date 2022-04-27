// router.get("/getalltrasnactions/:id", async (req, res) => {
//   const web3 = new Web3(
//     new Web3.providers.HttpProvider(
//       "https://rinkeby.infura.io/v3/ad6c6818de9c418981f7f1e08ba35b4c"
//     )
//   );
//   const contract = new web3.eth.Contract(contractInstance.abi, contractAddress);

//   const transactions = await contract.methods
//     .getArtAllTxn(req.params.id)
//     .call()
//     .then((result) => {
//       // console.log("transactions",transactions);

//       res.status(200).send(result);
//     })
//     .catch((err) => {
//       console.log("err", err);
//       res.status(500).send(err);
//     });

//   // getArtAllTxn()
// });
