import React from 'react';
import './App.css';
import Menu from './Menu';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <Menu />
      </div>
    </div>
  );
}

export default App;