import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

it("renders button with spinner", () => {
  const button = shallow(<Button loading={true} />);
  const spinner = (
    <div className="spinner-border text-light" role="status">
      <span className="sr-only"></span>
    </div>
  );

  expect(button.contains(spinner)).toEqual(true);
});

it("renders button with text", () => {
  const button = shallow(<Button text="Login" />);
  const text = <span> Login </span>;

  expect(button.contains(text)).toEqual(true);
});

it("renders button with applied class", () => {
  const button = shallow(<Button className="test-class-name" />);
  const testClassName = "test-class-name";

  expect(button.hasClass(testClassName)).toEqual(true);
});
