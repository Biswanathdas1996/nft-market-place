import React from "react";
import "./App.css";
import "./index.css";
import Routes from "./Routes";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import Web3Context from "./Web3Context";
import useWeb3 from "./hooks/useWeb3";
import Footer from "./components/Footer/Footer";
// import HomePage from "./components/Body/HomePage";
import Header from "./components/layout/Header";

const App = () => {
  const web3Context = useWeb3();
  return (
    <>
      <CssBaseline />
      <Web3Context.Provider value={web3Context}>
        <Header />
        <Routes />
        <Footer />
      </Web3Context.Provider>
    </>
  );
};

export default App;
