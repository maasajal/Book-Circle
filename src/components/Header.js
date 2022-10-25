import "./Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className="menu">
      <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            {/* <img src="logo.png" alt="Book Circle logo" /> */}
            <strong>Book Circle</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/new-book">New Books</Nav.Link>
              <Nav.Link href="/order-book">Order book</Nav.Link>
              <Nav.Link
                href="/add-book"
                title="Admin login. user id and password required"
              >
                Add Book
              </Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
