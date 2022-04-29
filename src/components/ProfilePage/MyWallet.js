import React, { useContext } from "react";
import { WalletCard } from "..";
import { TabPanel } from "@mui/lab";
import "../../App.css";
import Web3Context from "../../Web3Context";

const MyWallet = () => {
  const web3Context = useContext(Web3Context);
  return (
    <TabPanel value="1" sx={{ padding: 0, marginTop: 5 }}>
      <WalletCard
        user={web3Context.user}
        networkId={web3Context.networkId}
        balance={web3Context.balance}
        networkType={web3Context.networkType}
        transactions={web3Context.transactions}
      />
    </TabPanel>
  );
};

export default MyWallet;
