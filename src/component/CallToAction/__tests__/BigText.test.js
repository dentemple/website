// @flow

import React from "react";
import { shallow } from "enzyme";
import MyComponent from "../BigText";

it("renders without crashing", () => {
  shallow(<MyComponent />);
});
