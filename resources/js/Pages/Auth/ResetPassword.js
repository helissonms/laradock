import Guest from '@/Layouts/Guest';
import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

export default function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('password.update'));
  };

  return (
    <Guest>
      <Card>
        <Card.Header className="card-header">Redefinir senha</Card.Header>
        <Card.Body>
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
                  <Button type="submit" variant="primary" className="float-end" disabled={processing}>
                    Redefinir senha
                  </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Guest>
  );
}
