import React /* , { useState } */ from "react";
// import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NaviBar.css";
// import { NavLink } from "react-bootstrap";

// TODO: Note: look at Intersection Observer API to so hash link can be recognized on scroll
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
function NaviBar() {
  // const [isActive, setActive] = useState(false);

  /* function toggleClass() {
    setActive(!isActive);
  } */

  /* let activeStyle = {
    textDecoration: "underline",
  }; */

  // let activeClassName = "underline";

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar bg="light" expand={"sm"} className="mb-5 fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">CM</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"sm"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  {/* <NavLink */}
                  <NavHashLink
                    smooth
                    to="/#about"
                    className="NavLink"
                    activeClassName="active"
                    // activeStyle={{ color: "red" }}
                    // activeStyle={{ fontWeight: "bold" }}
                    style={() =>
                      console.log("I am called every route change...")
                    }

                    // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  >
                    About
                    {/* <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                    className={"NavLink"}
                    // className={`NavLink${isActive ? "active" : ""}`}
                    // onClick={toggleClass}
                  >
                    About
                  </Link> */}
                  </NavHashLink>
                </Nav.Link>
                {/* <Nav.Link href="#about">About</Nav.Link> */}
                <Nav.Link>
                  {/* <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className="NavLink"
                  >
                    Projects
                  </Link> */}
                </Nav.Link>

                <Nav.Link>
                  <NavHashLink
                    smooth
                    to="/#projects"
                    scroll={(el) => scrollWithOffset(el, 150)}
                    className="NavLink"
                    activeClassName="active"

                    // activeStyle={{ color: "red" }}
                  >
                    Projects
                  </NavHashLink>
                  {/* <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="NavLink"
                  >
                    Affiliations
                  </Link> */}
                </Nav.Link>
                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${"sm"}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NaviBar;
