import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import romanceBooks from "../../Data/romance.json";
import historyBooks from "../../Data/history.json";
import horrorBooks from "../../Data/horror.json";
import fantasyBooks from "../../Data/fantasy.json";
import scifiBooks from "../../Data/scifi.json";
import { useState } from "react";

const AllTheBoocks = function () {
  // state = {
  //   ActiveBooks: romanceBooks,
  // };
  const [activeBooks, setActiveBooks] = useState(romanceBooks);

  const changeType = (category) => {
    // this.setState({ ActiveBooks: category });
    setActiveBooks(category);
  };

  return (
    <>
      <Container className="mb-3">
        <Row className="d-flex justify-content-center mb-3">
          <div className="d-md-flex  justify-content-center">
            <Button
              onClick={() => changeType(romanceBooks)}
              className="m-2 bg-black"
            >
              Romance
            </Button>
            <Button
              onClick={() => changeType(historyBooks)}
              className="m-2 bg-warning text-dark"
            >
              History
            </Button>
            <Button
              onClick={() => changeType(horrorBooks)}
              className="m-2 bg-danger"
              data-testid="Click-changehorror"
            >
              Horror
            </Button>
            <Button
              onClick={() => changeType(fantasyBooks)}
              className="m-2 bg-success"
            >
              Fantasy
            </Button>
            <Button onClick={() => changeType(scifiBooks)} className="m-2">
              Sci-Fi
            </Button>
          </div>
        </Row>

        <Row className="d-flex justify-content-center">
          {activeBooks.slice(0, 12).map((libro) => (
            <Col
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 g-3  "
              key={libro.asin}
            >
              <Card className="d-flex flex-column h-100 trasformazione">
                <Card.Img variant="top" src={libro.img} />
                <Card.Body className="d-flex flex-column bg-dark text-white">
                  <Card.Title>{libro.title}</Card.Title>
                  <Card.Text data-testid="Click-change" className="flex-grow-1">
                    {libro.price} €
                  </Card.Text>
                  <Button variant="outline-warning">Dettagli</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="my-5">
        <Row></Row>
      </Container>
    </>
  );
};

export default AllTheBoocks;
