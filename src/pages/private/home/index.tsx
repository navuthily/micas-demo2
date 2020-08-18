
import React from 'react';
import { Link } from 'umi';

export default () => {
  return (
    <div>
      <h1>Page home</h1>
      <Link to="/abc">Go to abc page</Link>
      <br />
      <Link to="/login">Go to login page</Link>
    </div>
  );
};
