import { Component, useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments";

const Loading = function (props) {
  // state = {
  //   recensioni: [],
  //   isLoading: true,
  // };
  const [recensioni, setRecensioni] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
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
        //   isLoading: false,
        // });
        setRecensioni(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
        // this.setState({
        //   isLoading: false,
        // });
        setIsLoading(true);
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
      {isLoading && (
        <div className="text-center my-3">
          <Spinner variant="primary" animation="border" />
        </div>
      )}
    </>
  );
};

export default Loading;
