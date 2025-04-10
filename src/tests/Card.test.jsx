import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookList from "../Components/BookList";
import romanceBooks from "../../Data/romance.json";

describe("Expecting 150 cards", () => {
  it("cards expect", () => {
    render(<BookList listBook={romanceBooks} />);

    const Cards = screen.getAllByTestId("Card-libri");
    expect(Cards).toHaveLength(150);
  });
});
