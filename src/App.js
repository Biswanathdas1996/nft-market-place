import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import AppNav from "./components/AppNav";
import Web3Context from "./Web3Context";
import useWeb3 from "./hooks/useWeb3";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Body/HomePage";

// const options = {};
// const provider = Ganache.provider(options);

const App = (props) => {
  const web3Context = useWeb3();

  return (
    <>
      <CssBaseline />
      <Web3Context.Provider value={web3Context}>
        <div>
          <Header />

          <Router>
            <div>
              <main>
                <Routes />
              </main>
            </div>
          </Router>
          <Footer />
          {/* </Container> */}
        </div>
      </Web3Context.Provider>
    </>
  );
};

export default App;
