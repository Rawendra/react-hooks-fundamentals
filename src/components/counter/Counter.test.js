import React from "react";
import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const component = render(<Counter />);
  const header = component.getByTestId("data-header-h1");
  expect(header.textContent).toBe("This is awesome");
});

test("counter should be zero at the beginning", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("button + shud be present", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("add-btn").textContent).toBe("+");
});

test("button - shud be present", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("subtract-btn").textContent).toBe("-");
});

test("check the input field present", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input-element");
  expect(inputEl.value).toBe("1");
});

test("checking on the change of fire event", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input-element");
  expect(inputEl.value).toBe("1");
  fireEvent.change(inputEl, { target: { value: "5" } });
  expect(inputEl.value).toBe("5");
});

test("should check if the button is clicked, then the value is added correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("add-btn");
  fireEvent.click(addButton);
  const counter = getByTestId("counter");
  expect(counter.textContent).toBe("1");
});
