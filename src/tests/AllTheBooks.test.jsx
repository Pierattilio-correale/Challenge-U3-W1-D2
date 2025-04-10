import { describe, it, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  queryAllByTestId,
} from "@testing-library/react";

import AllTheBoocks from "../Components/AllTheBoocks";
describe("price change on click firstButton", () => {
  it("changes on click", () => {
    render(<AllTheBoocks />);

    const buttonHorror = screen.getAllByTestId("Click-changehorror")[0];
    fireEvent.click(buttonHorror);
    const bookDi0Price = screen.getAllByText(/7.92 €/i)[0];
    expect(bookDi0Price).toBeTruthy();
  });
  it("changes on click secondButton", () => {
    render(<AllTheBoocks />);

    const buttonHorror = screen.getAllByTestId("Click-changehistory")[0];
    fireEvent.click(buttonHorror);
    const bookDi0Price = screen.getAllByText(/17.39 €/i)[0];
    expect(bookDi0Price).toBeTruthy();
  });
});
