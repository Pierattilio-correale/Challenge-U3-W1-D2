import { Component } from "react";
import { Form, Button } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments";

class AddComment extends Component {
  state = {
    commenti: "",
    rate: 1,
  };
  addComment = () => {
    const myId = this.props.prop;
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        comment: this.state.commenti,
        rate: this.state.rate,
        elementId: this.props.prop,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNmQ4ZTFkNDM2ZTAwMTVkYTI2ZjUiLCJpYXQiOjE3NDM2Nzg4NjIsImV4cCI6MTc0NDg4ODQ2Mn0.m7ASrqAFiIuaIHug3snc-482NIRX5-LfuVSrOg3xfSU",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("COMMENTO SALVATO!");

          this.setState({
            commenti: "",
          });
        } else {
          throw new Error("errore nella response");
        }
      })

      .catch((err) => {
        console.log("Errore nella fetch", err);
      });
  };

  render() {
    return (
      <>
        <Form className=" my-4">
          <Form.Group>
            <h4 className="mb-3">Aggiungi un commento!</h4>
            <Form.Control
              type="text"
              placeholder="Scrivi un commento..."
              value={this.state.commenti}
              onChange={(e) => {
                this.setState({
                  commenti: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Che voto daresti ?</Form.Label>
            <Form.Select
              aria-label="Voto da dare"
              value={this.state.rate}
              onChange={(e) => {
                this.setState({
                  rate: e.target.value,
                });
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>
          <Button onClick={this.addComment} className="my-3 btn btn-warning">
            Invia Commento
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
