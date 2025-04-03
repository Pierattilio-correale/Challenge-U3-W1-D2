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
        <Col className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 g-3">
          <Card
            className={`d-flex flex-column h-100 ${
              this.state.click.selected ? "selezione" : ""
            }`}
            key={libro.asin}
            value={this.state.click.selected}
          >
            <Card.Img
              variant="top"
              src={libro.img}
              onClick={(e) => {
                this.setState({
                  click: {
                    ...this.state.click,
                    selected: !this.state.click.selected,
                  },
                });
              }}
            />
            <Card.Body className="d-flex flex-column bg-dark text-white">
              <Card.Title>{libro.title}</Card.Title>
              <Card.Text className="flex-grow-1">{libro.price} €</Card.Text>
              <Button variant="outline-warning">Dettagli</Button>
              {this.state.click.selected && (
                <>
                  <CommentArea prop={libro.asin} />
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
