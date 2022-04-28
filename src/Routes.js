import React from "react";
import { Route, Switch } from "react-router-dom";
import ArtHome from "./ArtHome";

// import MyWallet from "./components/ProfilePage/MyWallet";
import Wallettransactions from "./Wallettransactions";
import UploadIPFS from "./UploadIPFS";
import loadIPFS from "./loadIPFS";
import DescriptionCard from "./DescriptionCard";
import HomePage from "./components/Body/HomePage2";
import ArtExplore from "./components/Header/Explores/Art_Explore/ArtExplore";
import MusicExplore from "./components/Header/Explores/Music_Explore/MusicExplore";
import SportsExplore from "./components/Header/Explores/Sports_Explore/SportsExplore";

import ProfilePage from "./components/ProfilePage/ProfilePage";
import MyWallet from "./components/ProfilePage/MyWallet";
import HowItWorks from "./components/Header/HowItWorks/HowITworks";
import CreateNft from "./components/Create/Create";

import Home from "./Pages/Home";
import PublishArt from "./Pages/PublishArt";
import DetailsPage from "./Pages/DetailsPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/publishArt" component={PublishArt} />
        <Route exact path="/details/:id" component={DetailsPage} />

        <Route exact path="/home" component={HomePage} />
        <Route exact path="/HowItWorks" component={HowItWorks} />
        <Route exact path="/myWallet" component={ProfilePage} />
        <Route exact path="/myTransactions" component={Wallettransactions} />
        <Route exact path="/UploadtoIPFS" component={UploadIPFS} />
        <Route exact path="/loadIPFS" component={loadIPFS} />
        <Route exact path="/artPage" component={ArtExplore} />
        <Route exact path="/sportsPage" component={SportsExplore} />
        <Route exact path="/musicPage" component={MusicExplore} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
