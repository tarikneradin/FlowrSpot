import React from "react";
import { shallow } from "enzyme";

import { LoginModal } from "../components/login-modal";
import LoginForm from "../components/login-form";

it("renders login modal and login form inside", () => {
  const loginModal = shallow(<LoginModal showLoginModal={true} />);

  expect(loginModal.contains(<LoginForm />)).toEqual(true);
});
