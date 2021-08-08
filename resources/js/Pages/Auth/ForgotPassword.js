import Guest from '@/Layouts/Guest';
import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Alert, Button, Card, Form } from 'react-bootstrap';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <Guest>
      <Card>
        <Card.Header className="card-header">Redefinir senha</Card.Header>
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

            <Button type="submit" variant="primary" disabled={processing} className="float-end">
              Redefinir senha
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Guest>
  );
}
