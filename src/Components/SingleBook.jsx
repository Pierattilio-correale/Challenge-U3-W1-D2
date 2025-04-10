import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const SingleBook = function (props) {
  // state = {
  //   click: {
  //     selected: false,
  //   },
  // };
  // const [click, setClick] = useState({
  //   selected: false,
  // });

  const libro = props.oneBook[0];
  return (
    <>
      <Col className="g-3">
        <Card
          data-testid="Card-libri"
          className={`d-flex flex-column h-100 ${
            props.selectedBook === libro.asin ? "selezione" : ""
          }`}
          key={libro.asin}
        >
          <Card.Img
            data-testid="Click-broken"
            variant="top"
            src={libro.img}
            onClick={(e) => {
              props.cambiaValore(libro.asin);
            }}
          />
          <Card.Body className="d-flex flex-column bg-dark text-white">
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text className="flex-grow-1">{libro.price} €</Card.Text>
            <Button variant="outline-warning">Dettagli</Button>
            {/* {this.state.click.selected && (
                <>
                  <CommentArea prop={libro.asin} />
                </>
              )} */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleBook;
