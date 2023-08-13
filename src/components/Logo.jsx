import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className="navbar-brand" to={'/'}>
      Cafe Recursion
    </Link>
  );
}
export default Logo;
