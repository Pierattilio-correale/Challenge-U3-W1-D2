import { Navbar, Container, Nav } from "react-bootstrap";

const MyNav = function (props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={props.tema}
        data-bs-theme={props.tema}
      >
        <Container fluid={true}>
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>

              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
