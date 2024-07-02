import React from 'react';
import './App.css';
import Header from './components/header/header';
import HeaderBig from './components/headerBig/headerBig';
import CoursesBlock from './components/coursesBlock/coursesBlock';



function App() {
  return (
    <div className="App">
      <Header />
      <HeaderBig />
      <CoursesBlock />
    </div>
  );
}

export default App;
