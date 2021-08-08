import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

export default function Authenticated({ auth, children }) {

  return (
    <>
      <Navbar bg="white" expand="md" variant="light" className="shadow-sm">
        <Container>
          <InertiaLink href="/">
          </InertiaLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>
              <NavDropdown id="profile-nav-dropdown" title={auth.user.name}>
                <InertiaLink href={route('logout')} method="post" className="dropdown-item">
                  Sair
                </InertiaLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="py-4">
        <Container>
          <Row className="">
            <Col lg="8" md="8" xl="10">
              {children}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
