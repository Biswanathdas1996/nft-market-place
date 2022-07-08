import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Routes from "./Routes";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

import { getIcon } from "./utils/currencyIcon";
import { currentNeteork } from "./utils/currentNeteork";
import { getcurrentNetworkId } from "./CONTRACT-ABI/connect";
import { useLocation } from "react-router-dom";

const App = () => {
  const [icon, setIcon] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const location = useLocation();
  console.log("------->", location.pathname);

  window?.ethereum.on("chainChanged", async (chainId) => {
    const networkId = await getcurrentNetworkId();
    sessionStorage.setItem("currentyNetwork", networkId);
    getCurrencyInfo();
    window.location.reload(true);
  });

  window?.ethereum.on("accountsChanged", (accounts) => {
    window.location.reload(true);
  });

  useEffect(() => {
    getCurrencyInfo();
  }, []);

  const getCurrencyInfo = () => {
    setIcon(getIcon());
    setSymbol(currentNeteork());
  };

  return (
    <>
      <CssBaseline />
      {location.pathname !== "/" && <Header icon={icon} symbol={symbol} />}
      <Routes />
      <Footer />
    </>
  );
};

export default App;
