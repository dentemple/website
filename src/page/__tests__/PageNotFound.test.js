// @flow

import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import MyComponent from "../PageNotFound";

it("renders without crashing", () => {
  shallow(
    <MemoryRouter>
      <MyComponent />
    </MemoryRouter>
  );
});

it("matches the snapshot", () => {
  const component = shallow(
    <MemoryRouter>
      <MyComponent />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
