import { Component } from "react";
import { Alert } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments";

class Error extends Component {
  state = {
    recensioni: [],

    isError: false,
  };
  getComments = () => {
    const myId = this.props.prop;
    fetch(URL + "/" + myId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNmQ4ZTFkNDM2ZTAwMTVkYTI2ZjUiLCJpYXQiOjE3NDM2Nzg4NjIsImV4cCI6MTc0NDg4ODQ2Mn0.m7ASrqAFiIuaIHug3snc-482NIRX5-LfuVSrOg3xfSU",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella response");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          recensioni: data,
          isError: false,
        });
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
        this.setState({
          isError: true,
        });
      });
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <>
        {this.state.isError && (
          <Alert variant="danger" className="my-3">
            Errore nella richiesta!
          </Alert>
        )}
      </>
    );
  }
}

export default Error;
