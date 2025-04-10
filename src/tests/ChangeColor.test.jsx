import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../Components/BookList";
import romanceBooks from "../../Data/romance.json";

describe("Border card color change on click", () => {
  it("changes color", () => {
    render(<BookList listBook={romanceBooks} />);

    const myCard = screen.getAllByTestId("Card-libri")[0];
    const myCardCliccked = screen.getAllByTestId("Click-broken")[0];

    fireEvent.click(myCardCliccked);

    expect(myCard).toHaveClass("selezione");
    const myCardCliccked1 = screen.getAllByTestId("Click-broken")[1];
    fireEvent.click(myCardCliccked1);

    expect(myCard).not.toHaveClass("selezione");
  });
});
