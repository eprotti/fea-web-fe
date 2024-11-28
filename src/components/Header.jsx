// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // useLocation per determinare la pagina corrente
import { useSelector } from 'react-redux';
import { FaBell } from 'react-icons/fa'; // Importa l'icona del campanello
import { FaHome } from 'react-icons/fa';

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
                <Nav.Link as={Link} to="/" className={isActive('/')}><FaHome size={18} style={{ marginRight: '8px', verticalAlign: 'text-bottom' }} /> Homepage</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/documenti-da-compilare" className={isActive('/documenti-da-compilare')}>Documenti da compilare</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/documenti-da-firmare" className={isActive('/documenti-da-firmare')}>Documenti da firmare</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/documenti-in-attesa" className={isActive('/documenti-in-attesa')}>Documenti in attesa</Nav.Link>
              </Nav.Item>
              {/* Menu a due livelli (dropdown) */}
              <NavDropdown title="Firma massiva" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/services/service1">Ricerca</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/service2">Firma</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/service3">Storico</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link as={Link} to="/archivio-documenti" className={isActive('/archivio-documenti') | "last"} >Archivio documenti</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/notifications">
              <FaBell
                size={18}
                className={unreadCount > 0 ? 'pulse-animation' : ''} // Applica l'animazione se ci sono notifiche non lette
              />
              {unreadCount > 0 && (
                <Badge size={8} pill bg="danger" className="ml-2" style={{ fontSize: '12px', verticalAlign: 'baseline' }}>
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
