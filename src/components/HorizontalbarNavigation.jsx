import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa'; // Importa l'icona del campanello
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'; // useLocation per determinare la pagina corrente

const HorizontalbarNavigation = () => {

  const location = useLocation(); // Ottieni la posizione corrente della pagina

  // Funzione per determinare se un link è attivo
  const isActive = (path) => location.pathname === path;

  const notifications = useSelector(state => state.notifications);
  const unreadNotifications = notifications.filter(notification => !notification.isRead).length

  return (
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
                {unreadNotifications > 0 && (
                  <Badge size={8} pill bg="danger" className="ml-2 pulse-notify-animation" style={{ fontSize: '12px', verticalAlign: 'baseline', marginLeft: "8px" }}>
                    {unreadNotifications}
                  </Badge>)}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default HorizontalbarNavigation;
