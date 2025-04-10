import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../Components/BookList";
import romanceBooks from "../../Data/romance.json";

describe("Filtered response", () => {
  it("filters on change first try", () => {
    render(<BookList listBook={romanceBooks} />);
    const searchField = screen.getByPlaceholderText(
      /Cerca qui il tuo libro preferito/i
    );
    fireEvent.change(searchField, { target: { value: "sw" } });
    const bookFiltered = screen.queryAllByTestId("Card-libri");
    expect(bookFiltered).toHaveLength(2);
  });
  it("filters on change second try", () => {
    render(<BookList listBook={romanceBooks} />);
    const searchField = screen.getByPlaceholderText(
      /Cerca qui il tuo libro preferito/i
    );
    fireEvent.change(searchField, { target: { value: "tor" } });
    const bookFiltered = screen.queryAllByTestId("Card-libri");
    expect(bookFiltered).toHaveLength(4);
  });
  it("filters on change third try", () => {
    render(<BookList listBook={romanceBooks} />);
    const searchField = screen.getByPlaceholderText(
      /Cerca qui il tuo libro preferito/i
    );
    fireEvent.change(searchField, { target: { value: "bac" } });
    const bookFiltered = screen.queryAllByTestId("Card-libri");
    expect(bookFiltered).toHaveLength(2);
  });
  it("filters on change fourth try", () => {
    render(<BookList listBook={romanceBooks} />);
    const searchField = screen.getByPlaceholderText(
      /Cerca qui il tuo libro preferito/i
    );
    fireEvent.change(searchField, { target: { value: "imm" } });
    const bookFiltered = screen.queryAllByTestId("Card-libri");
    expect(bookFiltered).toHaveLength(1);
  });
});
