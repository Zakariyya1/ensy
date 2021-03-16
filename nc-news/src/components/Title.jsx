import '../styles/Title.css';
import React from 'react';
import { Link } from '@reach/router';

const Title = () => {
  return (
    <header className="title">
      <Link to={`/`}>
        <h1>Ensy</h1>
      </Link>
    </header>
  );
};

export default Title;
