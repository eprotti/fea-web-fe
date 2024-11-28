// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // useLocation per determinare la pagina corrente
import { useSelector } from 'react-redux';
import { FaBell } from 'react-icons/fa'; // Importa l'icona del campanello

const Header = () => {
  const location = useLocation(); // Ottieni la posizione corrente della pagina

  // Funzione per determinare se un link è attivo
  const isActive = (path) => location.pathname === path ? 'active' : '';

  const unreadCount = useSelector((state) => state.notifications.unreadCount);

  return (
    <header className="text-white shadow-lg page-header">
      <div id="header-wrapper">
        <div id="top-nav" className="container d-flex justify-content-between align-items-center">

          <div id="top-nav-wrapper">

            <a className="text-white" href="http://www.leo.gov.it">Ministero dell'Istruzione</a>

          </div>

        </div>
        <div id="head-lead" className="container d-flex justify-content-between align-items-center">
          <div>
            <div className="logo">
              <a href="#">
                <img src="/logo-sigillo.svg" alt="Logo MIM" height="80" />
              </a>
            </div>
            <h1>
              <a href="#">SIGILLO</a>
              <div className="">Firma Elettronica Avanzata</div>
            </h1>
          </div>
        </div>
      </div>
      <Navbar bg="dark-gray" variant="dark-gray" expand="lg" sticky="top">
        <Container className='pt-0'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/" className={isActive('/')}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about" className={isActive('/about')}>About</Nav.Link>
              </Nav.Item>
              {/* Menu a due livelli (dropdown) */}
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/services/service1">Service 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/service2">Service 2</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/service3">Service 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/services/all">All Services</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/notifications">
              <FaBell
                size={18}
                className={unreadCount > 0 ? 'pulse-animation' : ''} // Applica l'animazione se ci sono notifiche non lette
              />
              {unreadCount > 0 && (
                <Badge size={18}pill bg="danger" className="ml-2">
                  {unreadCount}
                </Badge>
              )}

            </Nav.Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
    /* <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header> */
  );
};

export default Header;
