import "./App.css";
import MyFooter from "./Components/MyFooter";
import MyNav from "./Components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Components/Welcome";
import AllTheBoocks from "./Components/AllTheBoocks";
import SingleBook from "./Components/SingleBook";
import { Card, Button, Col, Container, Row } from "react-bootstrap";

import romanceBooks from "../Data/romance.json";
import historyBooks from "../Data/history.json";
import horrorBooks from "../Data/horror.json";
import fantasyBooks from "../Data/fantasy.json";
import scifiBooks from "../Data/scifi.json";
import BookList from "./Components/BookList";

function App() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <header>
          <MyNav tema="primary" />
        </header>
        <main className="flex-grow-1 text-center ">
          <div className="d-flex justify-content-center">
            <Welcome />
          </div>
          <div>
            <AllTheBoocks />
          </div>
          <div>
            <h3 className="text-center my-3">Esercizio del singolo libro </h3>
            <Container className="my-5">
              <Row className="d-flex justify-content-center">
                <SingleBook oneBook={romanceBooks} />
              </Row>
            </Container>
          </div>
          <div>
            <Container className="my-5">
              <Row className="d-flex justify-content-center">
                <BookList listBook={romanceBooks} />
              </Row>
            </Container>
          </div>
        </main>
        <MyFooter />
      </div>
    </>
  );
}

export default App;
