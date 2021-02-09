import React from 'react';
import { Link } from '@reach/router';

const Title = () => {
  return (
    <button>
      <Link to={`/`}>
        <h1>NC-News</h1>
      </Link>
    </button>
  );
};

export default Title;
