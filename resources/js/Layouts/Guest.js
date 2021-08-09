import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Guest({ canRegister, children }) {

  return (
    <>
      <Navbar bg="white" expand="md" variant="light" className="shadow-sm">
        <Container>
          <InertiaLink href="/" className="navbar-brand">
            <ApplicationLogo size='lg' />
          </InertiaLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>
              <InertiaLink href={route('login')} className="nav-link">Entrar</InertiaLink>

              {canRegister && (
                <InertiaLink href={route('register')} className="nav-link">Registrar</InertiaLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="py-4">
        <Container>
          <Row className="">
            <Col lg={{span: 6, offset: 3}} md={{span: 6, offset: 3}} >
              {children}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
