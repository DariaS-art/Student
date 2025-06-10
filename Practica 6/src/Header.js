import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';

function Header({ onCartClick, onHomeClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar style={{ backgroundColor: '#6f42c1' }} variant="dark" expand="lg">
        <Navbar.Brand onClick={onHomeClick}>
          <img 
            src="https://nikifilini.com/wp-content/plugins/circle2w/assets/Niki.svg" 
            alt="Логотип" 
            style={{ height: '100px' }}
          />
        </Navbar.Brand>
        <div className="ms-auto d-flex align-items-center">
          <Button onClick={toggleMenu} className="me-2" variant="outline-light">
            <i className="fas fa-bars"></i>
          </Button>
          <Button onClick={onHomeClick} className="me-2" variant="outline-light">
            Главная
          </Button>
          <Button onClick={onCartClick} variant="outline-light">
            Корзина
          </Button>
        </div>
      </Navbar>

      <Offcanvas show={isOpen} onHide={toggleMenu} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#men">Мужчинам</Nav.Link>
            <Nav.Link href="#women">Женщинам</Nav.Link>
            <Nav.Link href="#children">Детям</Nav.Link>
            <Nav.Link href="#shoes">Обувь</Nav.Link>
            <Nav.Link href="#clothes">Одежда</Nav.Link>
            <Nav.Link href="#toys">Игрушки</Nav.Link>
            <Nav.Link href="#furniture">Мебель</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;