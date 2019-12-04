import React from "react";
import { shallow } from "enzyme";

import Flowers from "../components/flowers";
import FlowersGrid from "../components/flowers-grid";
import FlowersBanner from "../components/flowers-banner";
import { FlowersGridItem } from "../components/flowers-grid-item";

it("renders flowers grid and banner", () => {
  const flowers = shallow(<Flowers />);
  const flowersGrid = <FlowersGrid />;
  const flowersBanner = <FlowersBanner />;

  expect(flowers.contains(flowersGrid, flowersBanner)).toEqual(true);
});

it("renders flower grid item with info", () => {
  const flower = {
    id: 7,
    name: "Alpski volcin",
    latin_name: "Daphne alpina",
    sightings: 0,
    profile_picture:
      "//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/007/medium/L_00010.jpg?1527514226",
    favorite: false
  };

  const flowerItem = shallow(
    <FlowersGridItem flower={flower} loggedIn={true} />
  );

  expect(
    flowerItem.containsAllMatchingElements([
      <p className="flowers-grid-item__name"> Alpski volcin </p>,
      <p className="flowers-grid-item__latin-name"> Daphne alpina </p>
    ])
  ).toEqual(true);
});
