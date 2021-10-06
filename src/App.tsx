import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavItem from './components/Navbar/NavItem';
import DropdownMenu from './components/Dropdown';

const App = () => {
  return (
    <Navbar>
      <NavItem icon="P">
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
};

export default App;
