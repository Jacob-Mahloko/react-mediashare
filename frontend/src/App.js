import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Files from './components/files/files';
import React, { useState } from 'react';

function App() {
  //<Files fName='Media' Ftype='photo' date='2023-12-29'/>
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <NavBar setPage={setCurrentPage} />
      
      {currentPage === 'home' && <h2>Home</h2>}
      {currentPage === 'login' && <Login />}
      {currentPage === 'about' && <h2>About</h2>}
      {currentPage === 'contact' && <h2>Contact</h2>}

      
      <Footer />
    </div>
  );
}

export default App;
