import React from "react";
import "./App.css";
import "./index.css";
import Routes from "./Routes";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import Footer from "./components/Footer/Footer";
// import HomePage from "./components/Body/HomePage";
import Header from "./components/layout/Header";

const App = () => {
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
