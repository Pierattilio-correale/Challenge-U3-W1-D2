import { Component, useState } from "react";
import { Form, Button } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments";

const AddComment = function (props) {
  // state = {
  //   commenti: "",
  //   rate: 1,
  // };

  //metodo con due useState:
  // const [commenti, setCommenti] = useState("");
  // const [rate, setRate] = useState(1);

  //metodo con un solo useState:
  const [cr, setCr] = useState({
    commenti: "",
    rate: 1,
  });

  useState();
  const addComment = () => {
    const myId = props.prop;
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        comment: cr.commenti, //commenti,
        rate: cr.rate,
        elementId: props.prop,
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

          // this.setState({
          //   commenti: "",
          // });
          setCr((prev) => ({
            ...prev,
            commenti: "",
          }));
        } else {
          throw new Error("errore nella response");
        }
      })

      .catch((err) => {
        console.log("Errore nella fetch", err);
      });
  };

  return (
    <>
      <Form className=" my-4">
        <Form.Group>
          <h4 className="mb-3">Aggiungi un commento!</h4>
          <Form.Control
            type="text"
            placeholder="Scrivi un commento..."
            value={cr.commenti}
            onChange={(e) => {
              // this.setState({
              //   commenti: e.target.value,
              // });
              setCr((prev) => ({
                ...prev,
                commenti: e.target.value,
              }));
            }}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Che voto daresti ?</Form.Label>
          <Form.Select
            aria-label="Voto da dare"
            value={cr.rate}
            onChange={(e) => {
              // this.setState({
              //   rate: e.target.value,
              // });
              setCr((prev) => ({
                ...prev,
                rate: e.target.value,
              }));
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Button onClick={addComment} className="my-3 btn btn-warning">
          Invia Commento
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
