// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Day and Panchang App</h1>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>Home</li>
          <li style={liStyle}>Cities</li>
          <li style={liStyle}>Search</li>
        </ul>
      </nav>
    </header>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#3f51b5', // Change header background color
  color: '#fff', // Change header text color
  padding: '10px',
  textAlign: 'left', // Align header text to the left
};

const navStyle = {
  marginTop: '10px', // Add margin to the top of the navigation
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'flex-start', // Align navigation items to the left
};

const liStyle = {
  cursor: 'pointer',
  padding: '10px',
  marginRight: '10px',
  backgroundColor: '#536dfe', // Change navigation item background color
  color: '#fff', // Change navigation item text color
};

export default Header;
