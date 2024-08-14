import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/pages/home/home';
import FormHelp from './components/formHelp/formHelp';
import Footer from './components/footer/footer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Home />
      <FormHelp />
      <Footer />
    </div>
  );
}

export default App;
