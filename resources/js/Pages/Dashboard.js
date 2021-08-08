import React from 'react';
import { Card } from 'react-bootstrap';
import Authenticated from '@/Layouts/Authenticated';

export default function Dashboard({ auth, errors }) {
  return (
    <Authenticated auth={auth} errors={errors} >
      <Card>
        <Card.Header>Dashboard</Card.Header>
        <Card.Body>
          <h1>You're logged in!</h1>
        </Card.Body>
      </Card>
    </Authenticated>
  );
}
