// src/components/Header.jsx
import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { FaHome, FaUser } from 'react-icons/fa'; // Importa l'icona del campanello
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'; // useLocation per determinare la pagina corrente
import { loginUser } from '../actions/userActions';

const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);  // Cambia 'state' a 'state.user'

  const handleLogin = () => {
    // Simula un login con nome e cognome
    dispatch(loginUser({ firstName: 'LEONARDO', lastName: 'TEST' }));
  };

  const location = useLocation(); // Ottieni la posizione corrente della pagina

  // Funzione per determinare se un link è attivo
  const isActive = (path) => location.pathname === path;

  const unreadCount = useSelector((state) => state.notifications.unreadCount);

  return (
    <header className="text-white shadow-lg page-header">
      <div id="header-wrapper">
        <div id="top-nav" className="container d-flex justify-content-between align-items-center">

          <div id="top-nav-wrapper">

            <a className="text-white" href="http://www.leo.gov.it">Ministero dell'Istruzione</a>

            <Button onClick={handleLogin} variant="primary" style={{ position: "fixed", bottom: "10px", left: "10px" }}>
              Login
            </Button>

            {user.firstName!='' && (<div className="text-white" style={{ position: "fixed", top: "3px", right: "10px", width: "200px", float: "right", display: "flex" }}>
              <span className='mr-2'>{user.firstName} {user.lastName}</span>
              <FaUser className='user-icon' />
            </div>)}
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
                <Nav.Link as={Link} to="/" className={isActive('/') ? "active" : ""}><FaHome size={18} style={{ marginRight: '8px', verticalAlign: 'text-bottom' }} /> Homepage</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/documenti-da-compilare" className={isActive('/documenti-da-compilare') ? "active" : ""}>Documenti da compilare</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/documenti-da-firmare" className={isActive('/documenti-da-firmare') ? "active" : ""}>Documenti da firmare</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/documenti-in-attesa" className={isActive('/documenti-in-attesa') ? "active" : ""}>Documenti in attesa</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Firma massiva" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/services/service1">Ricerca</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/service2">Firma</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/service3" className='last'>Storico</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Archivio documenti" id="basic-nav-dropdown" className={(isActive('/archivio-documenti/firmati') || isActive('/archivio-documenti/scaduti') || isActive('/archivio-documenti/annullati')) ? "active" : ""}>
                <NavDropdown.Item as={Link} to="/archivio-documenti/firmati">Firmati</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/archivio-documenti/scaduti">Scaduti</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/archivio-documenti/annullati" className='last'>Annullati</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className={"last"}>
                <Nav.Link as={Link} to="/notifiche" className={isActive('/notifiche') ? "active" : ""}>
                  Notifiche
                  {unreadCount > 0 && (
                    <Badge size={8} pill bg="danger" className="ml-2 pulse-notify-animation" style={{ fontSize: '12px', verticalAlign: 'baseline', marginLeft: "8px" }}>
                      {unreadCount}
                    </Badge>)}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
