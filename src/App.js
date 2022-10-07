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
import { fetchConfigData, getConfigData } from "./getConfigaration";

export const ConfigContext = createContext(null);

const App = () => {
  const [icon, setIcon] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [accessable, setAccessable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeNetwork, setActiveNetwork] = useState(null);
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
    setLoading(true);

    await fetchConfigData();
    const getConfigDataVaues = getConfigData();
    const currentNetworkId = await getcurrentNetworkId();
    console.log("--->currentNetworkId", currentNetworkId);
    setActiveNetwork(getConfigDataVaues?.network_name);
    if (
      currentNetworkId.toString() !== getConfigDataVaues?.network_id?.toString()
    ) {
      setAccessable(false);
    } else {
      setAccessable(true);
    }
    setLoading(false);
  };

  const getCurrencyInfo = () => {
    setIcon(getIcon());
    setSymbol(currentNeteork());
  };

  console.log("----activeNetwork>", activeNetwork);
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
          {!loading ? (
            <h2 style={{ textAlign: "center", margin: "12.5rem" }}>
              Please change the blockchain network to{" "}
              <b>{activeNetwork?.toUpperCase()}</b>
            </h2>
          ) : (
            <div
              style={{ textAlign: "center", margin: "12.5rem" }}
              className="loader_background"
            >
              <h1 className="loader_ui">Loading configurations...</h1>
            </div>
          )}
        </>
      )}
      <Footer />
    </ConfigContext.Provider>
  );
};

export default App;
