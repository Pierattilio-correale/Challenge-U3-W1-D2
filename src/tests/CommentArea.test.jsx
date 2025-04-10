import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import CommentArea from "../Components/CommentArea";

describe("CommentArea rendering check", () => {
  it("CommentAreas element", () => {
    render(<CommentArea prop="1592122604" />);
    const myCommentArea = screen.getByTestId("CommentArea");
    expect(myCommentArea).toBeInTheDocument();
  });
});
