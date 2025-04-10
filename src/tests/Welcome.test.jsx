import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../Components/Welcome";

describe("Cheking if welcome works", () => {
  it("Welcome works", () => {
    render(<Welcome />);
    const myAlert = screen.getByText(
      /Welcome! Sei dentro lo store di libri più interessanti del momento!/i
    );
    expect(myAlert).toBeInTheDocument();
  });
});
