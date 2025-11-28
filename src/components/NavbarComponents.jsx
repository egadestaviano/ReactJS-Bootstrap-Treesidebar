import { Container, Image, Nav, NavDropdown, Navbar, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const NavbarComponents = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or respect OS setting
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  // Apply theme changes to the document
  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('data-bs-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">POS APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Button 
              variant={darkMode ? "outline-light" : "outline-dark"} 
              className="me-2" 
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
            <NavDropdown
              title={
                <span className="d-inline-flex align-items-center">
                  <Image
                    src="/img/img_avatar.png"
                    alt="User Avatar"
                    title="User Avatar"
                    roundedCircle
                    width={30}
                    height={30}
                    className="me-2"
                  />
                  Pojok Code
                </span>
              }
              id="user-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#">Profil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;