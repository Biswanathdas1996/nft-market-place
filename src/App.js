import React, { useEffect, useState, createContext } from "react";
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
import { updateConfigData, getConfigData } from "./getConfigaration";
import { getNetworkName } from "./config";

export const ConfigContext = createContext(null);

const App = () => {
  const [icon, setIcon] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [accessable, setAccessable] = useState(false);
  const [configNetwork, setConfigNetwork] = useState(null);
  const location = useLocation();

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
    getConfig();
  }, []);

  const getConfig = async () => {
    await updateConfigData();
    const getConfigDataVaues = getConfigData();
    const currentNetworkId = await getcurrentNetworkId();
    setConfigNetwork(getConfigDataVaues?.networkId);

    if (
      currentNetworkId.toString() !== getConfigDataVaues?.networkId.toString()
    ) {
      setAccessable(false);
    } else {
      setAccessable(true);
    }
  };

  const getCurrencyInfo = () => {
    setIcon(getIcon());
    setSymbol(currentNeteork());
  };

  const navBarLessRoutes = ["/"];
  return (
    <ConfigContext.Provider value="dark">
      <CssBaseline />
      {navBarLessRoutes.indexOf(location.pathname) === -1 && (
        <Header icon={icon} symbol={symbol} />
      )}
      {accessable ? (
        <Routes />
      ) : (
        <>
          <h2 style={{ textAlign: "center", margin: "12.5rem" }}>
            Please change the blockchain network to{" "}
            <b>{getNetworkName(configNetwork).toUpperCase()}</b>
          </h2>
        </>
      )}
      <Footer />
    </ConfigContext.Provider>
  );
};

export default App;
