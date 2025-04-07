import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";
class BookList extends Component {
  state = {
    formPower: {
      change: "",
    },

    click: {
      selected: null,
    },
  };
  handleChange = (nuovoValore) => {
    this.setState({
      click: {
        selected: nuovoValore,
      },
    });
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
    const libro = this.props.listBook[0];
    return (
      <>
        <h3>esercizio dei multipli libri</h3>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Form>
                <Form.Group className="mb-3">
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
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Row>
                {this.props.listBook
                  .filter((libro) =>
                    libro.title
                      .toLowerCase()
                      .includes(this.state.formPower.change.toLowerCase())
                  )
                  .map((libro) => (
                    <SingleBook
                      key={libro.asin}
                      oneBook={[libro]}
                      cambiaValore={this.handleChange}
                      selectedBook={this.state.click.selected}
                    />
                  ))}
              </Row>
            </Col>

            <Col xs={12} md={6} className="d-flex justify-content-center ">
              {this.state.click.selected && (
                <CommentArea prop={this.state.click.selected} />
              )}
            </Col>
          </Row>
        </Container>
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
