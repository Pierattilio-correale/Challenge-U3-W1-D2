import { Component, useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments";

const Error = function (props) {
  // state = {
  //   recensioni: [],

  //   isError: false,
  // };
  const [recensioni, setRecensioni] = useState([]);
  const [isError, setIsError] = useState(false);
  const getComments = () => {
    const myId = props.prop;
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
        // this.setState({
        //   recensioni: data,
        //   isError: false,
        // });
        setRecensioni(data);
        setIsError(false);
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
        // this.setState({
        //   isError: true,
        // });
        setIsError(true);
      });
  };
  // componentDidMount() {
  //   this.getComments();
  // }
  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      {isError && (
        <Alert variant="danger" className="my-3">
          Errore nella richiesta!
        </Alert>
      )}
    </>
  );
};

export default Error;
