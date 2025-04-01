import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import boocks from "../../Data/romance.json";

class AllTheBoocks extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="d-flex justify-content-center">
            {boocks.map((libro) => {
              return (
                <Col
                  className=" col-xl-2 col-lg-3 col-md-4 col-xs-6 g-3 "
                  key={libro.asin}
                >
                  <Card className="d-flex flex-column h-100">
                    <Card.Img variant="top" src={libro.img} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{libro.title}</Card.Title>
                      <Card.Text className=" flex-grow-1">
                        {libro.price}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBoocks;
