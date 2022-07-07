import React from "react";
import "./App.css";
import "./index.css";
import Routes from "./Routes";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const App = () => {
  window?.ethereum.on("chainChanged", (chainId) => {
    window.location.reload(true);
  });

  return (
    <>
      <CssBaseline />

      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
