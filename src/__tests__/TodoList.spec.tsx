import { mount } from "enzyme";
import * as React from "react";
import TodoList from "../TodoList";

it("Should display todos as a list of items", () => {
  const items = [
    { id: 1, text: "foo" },
    { id: 2, text: "bar" },
  ];
  const wrapper = mount(<TodoList items={items} />);
  expect(wrapper.find("li").length).toBe(2);
});
