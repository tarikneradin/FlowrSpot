import React from "react";

import FlowersBanner from "./flowers-banner";
import FlowersGrid from "./flowers-grid";

import "../styles/flowers.scss";

const Flowers = () => {
  return (
    <div className="flowers">
      <FlowersBanner />
      <FlowersGrid />
    </div>
  );
};

export default Flowers;
