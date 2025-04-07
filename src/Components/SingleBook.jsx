import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    click: {
      selected: false,
    },
  };

  render() {
    const libro = this.props.oneBook[0];
    return (
      <>
        <Col className="g-3">
          <Card
            className={`d-flex flex-column h-100 ${
              this.props.selectedBook === libro.asin ? "selezione" : ""
            }`}
            key={libro.asin}
          >
            <Card.Img
              variant="top"
              src={libro.img}
              onClick={(e) => {
                this.props.cambiaValore(libro.asin);
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
  }
}

export default SingleBook;
