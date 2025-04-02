import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    formPower: {
      change: "",
    },
  };
  SearchType = (e) => {
    this.setState({
      formPower: {
        ...this.state.formPower,
        change: e.target.value,
      },
    });
    return this.state.formPower;
  };

  render() {
    return (
      <>
        <h3>esercizio dei multipli libri</h3>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Form>
                <Form.Group className="mb-3 ">
                  <Form.Label>Cerca qui il tuo libro preferito!</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.formPower.change}
                    onChange={(e) => {
                      this.setState({
                        formPower: {
                          ...this.state.formPower,
                          change: e.target.value,
                        },
                      });
                    }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

        {this.props.listBook.map((libro) => (
          <SingleBook key={libro.asin} oneBook={[libro]} />
        ))}
      </>
    );
  }
}
export default BookList;

// SearchType = (letter) => {
//     this.setState({ change: e.target.value });
//   };
// {this.props.listBook.filter(this.state.formPower).map((libro) => (
//     <SingleBook key={libro.asin} oneBook={[libro]} />
//   ))}

// SearchType = (e) => {
//     this.setState({
//       formPower: {
//         ...this.state.formPower,
//         change: e.target.value,
//       },
//     });
//     return this.state.formPower;
//   };
