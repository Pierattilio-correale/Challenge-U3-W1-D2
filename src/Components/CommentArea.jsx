import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import Loading from "./Loading";
import Error from "./Error";
const URL = "https://striveschool-api.herokuapp.com/api/comments";

class CommentArea extends Component {
  state = {
    recensioni: [],
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
        });
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
      });
  };
  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log("Previous prop:", prevProps.prop);
    console.log("Current prop:", this.props.prop);

    if (this.props.prop !== prevProps.prop) {
      this.getComments();
    } else {
      console.log("Il prop non è cambiato.");
    }
  };
  render() {
    const myId = this.props.prop;

    return (
      <>
        {myId && (
          <>
            <Loading prop={myId} />
            <Error prop={myId} />
            <CommentList prop={myId} />
            <AddComment prop={myId} />
          </>
        )}
      </>
    );
  }
}

export default CommentArea;
