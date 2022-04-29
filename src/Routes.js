import React from "react";
import { Route, Routes } from "react-router-dom";
import Wallettransactions from "./Wallettransactions";

import HomePage from "./components/Body/HomePage2";
import ArtExplore from "./components/Header/Explores/Art_Explore/ArtExplore";
import MusicExplore from "./components/Header/Explores/Music_Explore/MusicExplore";
import SportsExplore from "./components/Header/Explores/Sports_Explore/SportsExplore";
import HowItWorks from "./components/Header/HowItWorks/HowITworks";

import Home from "./Pages/Home";
import PublishArt from "./Pages/PublishArt";
import DetailsPage from "./Pages/DetailsPage";
import TopSelling from "./Pages/TopSelling";
import CategoryWiseList from "./Pages/CategoryWiseList";
import Profile from "./Pages/Profile";

class Routing extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/publishArt" element={<PublishArt />} />
        <Route exact path="/details/:tokenId" element={<DetailsPage />} />
        <Route
          exact
          path="/category/:category"
          element={<CategoryWiseList />}
        />
        <Route exact path="/top-selling" element={<TopSelling />} />

        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/HowItWorks" element={<HowItWorks />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/myTransactions" element={<Wallettransactions />} />

        <Route exact path="/loadIPFS" element={<loadIPFS />} />
        <Route exact path="/artPage" element={<ArtExplore />} />
        <Route exact path="/sportsPage" element={<SportsExplore />} />
        <Route exact path="/musicPage" element={<MusicExplore />} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Routes>
    );
  }
}

export default Routing;
