import React from 'react'
import { Head } from '@inertiajs/inertia-react'

export default ({ routes }) => {
  console.log(routes);

  return (
    <>
      <Head title="Welcome" />
      <h1>Home</h1>
    </>
  )
}
