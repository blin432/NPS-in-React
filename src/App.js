import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'

import JumboCard from './components/JumboCard.jsx'
import MainLayout from './components/MainLayout.jsx';

function App() {
  return (
    <div className="App">
    <Navbar/>
  <JumboCard/>
 <MainLayout/>
</div>

  );
}

export default App;
