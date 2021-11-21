import { Navbar, Container, Nav, Offcanvas, Form, FormControl, Button,} from 'react-bootstrap';


function Navigation() {
    return (
      <div className="Container">
        <Navbar bg="dark" variant="dark" expand={false}>
          <Container fluid>
            <Navbar.Brand href="/">O`Hare</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/notice">Inicio</Nav.Link>
                  <Nav.Link href="/flys" >Vuelos</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Navigation;
  