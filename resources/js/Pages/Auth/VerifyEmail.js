import Guest from '@/Layouts/Guest';
import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Button, Form } from 'react-bootstrap';

export default function VerifyEmail({ status }) {
  const { post, processing } = useForm();

  const submit = (e) => {
    e.preventDefault();

    post(route('verification.send'));
  };

  return (
    <Guest>
      <Card>
        <Card.Header className="card-header">Verifique seu endereço de e-mail</Card.Header>
        <Card.Body>
          {status === 'verification-link-sent' && (
            <Alert variant="success">
              Um novo link de verificação foi enviado para seu endereço de e-mail.
            </Alert>
          )}

          Antes de prosseguir, verifique seu e-mail em busca de um link de verificação.
          Se você não recebeu o e-mail,
          <Form className="d-inline" onSubmit={submit}>
            <Button variant="link" disabled={processing}>clique aqui para solicitar outro</Button>.
          </Form>
        </Card.Body>
      </Card>
    </Guest>
  );
}
