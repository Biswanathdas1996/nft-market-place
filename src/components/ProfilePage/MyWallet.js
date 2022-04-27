import React, { useState, useContext } from "react";
import { WalletCard } from "..";
import { useFindArtTokens, useResellArt } from "../../hooks/DigitalArtHooks";
import { TabPanel } from "@mui/lab";
import "../../App.css";
import Web3Context from "../../Web3Context";

const MyWallet = (props) => {
  const web3Context = useContext(Web3Context);
  const [state, setState] = useState({
    message: "",
    tokenId: "",
    price: 0,
    showModal: false,
  });

  const artTokens = useFindArtTokens({ filter: "mine" });
  const { response: resellArtResponse, resellArt } = useResellArt();

  // const classes = useStyles();
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: '100%',
  //     maxWidth: 360,
  //     backgroundColor: theme.palette.background.paper,
  //   },
  // }));

  // const classes = {
  //   root: {
  //     width: "100%",
  //     maxWidth: 360,
  //   },
  // };
  return (
    <TabPanel value="1" sx={{ padding: 0, marginTop: 5 }}>
      {/* <section className="text-center"> */}

      <WalletCard
        // className={classes.root}
        user={web3Context.user}
        networkId={web3Context.networkId}
        balance={web3Context.balance}
        networkType={web3Context.networkType}
        transactions={web3Context.transactions}
      />

      {/* </section> */}
    </TabPanel>
  );
};

export default MyWallet;
