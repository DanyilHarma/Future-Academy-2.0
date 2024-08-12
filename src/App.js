import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/pages/home/home';




function App(props) {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
