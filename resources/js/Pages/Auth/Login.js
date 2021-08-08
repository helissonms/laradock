import Guest from '@/Layouts/Guest';
import React, { useEffect } from 'react';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap';

export default function Login({ status, canResetPassword, canRegister }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: true,
  });

  console.log(data);

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <Guest canRegister>
      <Card>
        <Card.Header className="card-header">Entrar</Card.Header>
        <Card.Body>
          {status && (
            <Alert variant="success">{status}</Alert>
          )}

          <Form onSubmit={submit}>
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

            <Form.Group className="mb-3" controlId="remember">
              <Form.Check
                type="checkbox"
                name="remember"
                label="Lembre-se de mim"
                value={data.remember}
                defaultChecked
                onChange={onHandleChange} />
            </Form.Group>

            <Row>
              <Col>
                {canResetPassword && (
                    <InertiaLink href={route('password.request')} className="btn btn-link float-start">
                      Esqueceu a senha?
                    </InertiaLink>
                  )}
              </Col>
              <Col>
                  <Button type="submit" variant="primary" className="float-end" disabled={processing}>Entrar</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Guest>
  );
}
