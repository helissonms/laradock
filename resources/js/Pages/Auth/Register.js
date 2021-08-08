import Guest from '@/Layouts/Guest';
import React, { useEffect } from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

export default function Register() {
  const page = usePage();

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  console.log(data);

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <Guest>
      <Card>
        <Card.Header className="card-header">Registrar</Card.Header>
        <Card.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className={`${errors.name ? 'is-invalid' : ''}`}
                value={data.name}
                required
                autoComplete="name"
                onChange={onHandleChange} />
              {errors.name && (
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className={`${errors.email ? 'is-invalid' : ''}`}
                value={data.email}
                required
                autoComplete="email"
                onChange={onHandleChange} />
              {errors.email && (
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="password"
                className={`${errors.password ? 'is-invalid' : ''}`}
                value={data.password}
                required
                autoComplete="current-password"
                onChange={onHandleChange} />
              {errors.password && (
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password_confirmation">
              <Form.Label>Confirmar Senha</Form.Label>
              <Form.Control
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                required
                onChange={onHandleChange} />
            </Form.Group>

            <Row>
              <Col>
                <InertiaLink href={route('login')} className="btn btn-link">
                  Já está registrado?
                </InertiaLink>
              </Col>
              <Col>
                  <Button type="submit" variant="primary" className="float-end" disabled={processing}>Registrar</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Guest>
  );
}
