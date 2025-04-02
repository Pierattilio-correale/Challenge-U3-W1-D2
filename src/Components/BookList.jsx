import SingleBook from "./SingleBook";

const BookList = function (props) {
  return (
    <>
      <h3>esercizio dei multipli libri</h3>
      {props.listBook.map((libro) => (
        <SingleBook key={libro.asin} oneBook={[libro]} />
      ))}
    </>
  );
};

export default BookList;
