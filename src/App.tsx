import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">NANlist</div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Add List</a></li>
          <li><a href="#">My List</a></li>
          <li><a href="#">Me</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <h1>Welcome to<span className="highlight">NANlist</span></h1>
        <p className="subtitle">List Sekarang, Tenang Kemudian</p>
        <button className="add-button">
          Add List &gt;<span className="arrow"></span>
        </button>
      </main>
    </div>
  );
}

export default App;
