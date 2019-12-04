import React from "react";

import FlowersSearch from "./flowers-search";

import "../styles/flowers-banner.scss";
import flowersBackground from "../../../res/images/flowers-background.svg";

const FlowersBanner = () => {
  return (
    <div
      className="flowers-banner"
      style={{
        backgroundImage: `url(${flowersBackground})`
      }}
    >
      <p className="flowers-banner__title">Discover flowers around you </p>
      <p className="flowers-banner__desc">
        Explore between more than 8.427 sightings
      </p>
      <FlowersSearch />
    </div>
  );
};

export default FlowersBanner;
