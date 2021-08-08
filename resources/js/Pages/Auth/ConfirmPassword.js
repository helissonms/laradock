import Guest from '@/Layouts/Guest';
import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Button, Card, Form } from 'react-bootstrap';

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('password.confirm'));
  };

  return (
    <Guest>
      <Card>
        <Card.Header className="card-header">Confirmar senha</Card.Header>
        <Card.Body>
          Por favor, confirme sua senha antes de continuar.

          <Form onSubmit={submit}>
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

            <Button type="submit" variant="primary" disabled={processing} className="float-end">
              Confirmar senha
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Guest>
  );
}
