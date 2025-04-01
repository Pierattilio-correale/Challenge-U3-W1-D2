import "./App.css";
import MyFooter from "./Components/MyFooter";
import MyNav from "./Components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Components/Welcome";
import AllTheBoocks from "./Components/AllTheBoocks";

function App() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <header>
          <MyNav tema="primary" />
        </header>
        <main className="flex-grow-1 text-center">
          <div className="d-flex justify-content-center">
            <Welcome />
          </div>
          <div>
            <AllTheBoocks />
          </div>
        </main>
        <MyFooter />
      </div>
    </>
  );
}

export default App;
