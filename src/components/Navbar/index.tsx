import React from 'react';
import './Navbar.scss';

interface Props {}

const Navbar: React.FC<Props> = ({children}) => (
  <nav className="nav-bar">
    <ul className="item">{children}</ul>
  </nav>
);

export default Navbar;
