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

describe("check  ListComment before and after fecth", () => {
  it("ListComment void on start ", () => {
    render(<CommentList />);
    const commentList = screen.queryAllByTestId("list-item");
    expect(commentList).toHaveLength(0);
  });
  it("ListComment after promis ", async () => {
    render(
      <>
        <CommentList /> <BookList listBook={romanceBooks} />
      </>
    );

    const myCardCliccked = screen.getAllByTestId("Click-broken")[1];

    fireEvent.click(myCardCliccked);
    const commentList = await screen.findAllByTestId("list-item");
    expect(commentList).toBeTruthy();
  });
});
