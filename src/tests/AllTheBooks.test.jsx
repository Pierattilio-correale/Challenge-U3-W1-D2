import { describe, it, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  queryAllByTestId,
} from "@testing-library/react";
import BookList from "../Components/BookList";
import romanceBooks from "../../Data/romance.json";
import CommentList from "../Components/CommentList";
import AllTheBoocks from "../Components/AllTheBoocks";
describe("price change on click ", () => {
  it("changes on click", () => {
    render(<AllTheBoocks />);

    const buttonHorror = screen.getAllByTestId("Click-changehorror")[0];
    fireEvent.click(buttonHorror);
    const bookDi0Price = screen.getAllByText(/7.92 €/i)[0];
    expect(bookDi0Price).toBeTruthy();
  });
});
