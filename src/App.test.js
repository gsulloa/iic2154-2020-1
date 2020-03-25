import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App, { Counter } from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

describe("COunter", () => {
  it("Increment", () => {
    const fn = jest.fn();
    const { getByText, queryByText, getByTestId, baseElement } = render(
      <Counter onSubmit={fn} />
    );
    const decrementButton = getByText("-");
    const incrementButton = getByText("+");
    const submitButton = getByText(/enviar/i);
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    const undef = queryByText("no estoy");
    expect(undef).toBeNull();
    const count = getByTestId("count");
    expect(count).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(count.innerHTML).toBe("1");
    fireEvent.click(incrementButton);

    expect(count.innerHTML).toBe("2");

    fireEvent.click(submitButton);
    expect(count.innerHTML).toBe("0");

    expect(fn.mock.calls.length).toBe(1);
    expect(fn.mock.calls[0][0]).toBe(2);

    expect(baseElement).toMatchSnapshot();
  });
});
