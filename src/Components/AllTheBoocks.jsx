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

class AllTheBoocks extends Component {
  state = {
    ActiveBooks: romanceBooks,
  };

  changeType = (category) => {
    this.setState({ ActiveBooks: category });
  };

  render() {
    return (
      <>
        <Container className="mb-3">
          <Row className="d-flex justify-content-center mb-3">
            <div className="d-md-flex  justify-content-center">
              <Button
                onClick={() => this.changeType(romanceBooks)}
                className="m-2 bg-black"
              >
                Romance
              </Button>
              <Button
                onClick={() => this.changeType(historyBooks)}
                className="m-2 bg-warning text-dark"
              >
                History
              </Button>
              <Button
                onClick={() => this.changeType(horrorBooks)}
                className="m-2 bg-danger"
              >
                Horror
              </Button>
              <Button
                onClick={() => this.changeType(fantasyBooks)}
                className="m-2 bg-success"
              >
                Fantasy
              </Button>
              <Button
                onClick={() => this.changeType(scifiBooks)}
                className="m-2"
              >
                Sci-Fi
              </Button>
            </div>
          </Row>

          <Row className="d-flex justify-content-center">
            {this.state.ActiveBooks.map((libro) => (
              <Col
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 g-3  "
                key={libro.asin}
              >
                <Card className="d-flex flex-column h-100 trasformazione">
                  <Card.Img variant="top" src={libro.img} />
                  <Card.Body className="d-flex flex-column bg-dark text-white">
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {libro.price} €
                    </Card.Text>
                    <Button variant="outline-warning">Dettagli</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBoocks;
