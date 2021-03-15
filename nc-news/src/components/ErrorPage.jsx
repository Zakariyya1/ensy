import React from 'react';
import { Link } from '@reach/router';

const ErrorPage = ({ msg }) => {
  return (
    <>
      <h2>{msg ? msg : '404 - Not Found'}</h2>
      <Link to="/">Homepage</Link>
    </>
  );
};

export default ErrorPage;
