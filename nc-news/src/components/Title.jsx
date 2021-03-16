import '../styles/Title.css';
import React from 'react';
import { Link } from '@reach/router';

const Title = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="brand">Ensy</h1>
      </div>
      <div className="header-right">
        <p className="greeting">Account: weegembump</p>
      </div>
    </header>
  );
};

export default Title;
