import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/pages/home/home';
import FormHelp from './components/formHelp/formHelp';
import Footer from './components/footer/footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import CoursesPageContainer from './components/pages/coursesPage/coursesPageContainer';
import AnyoneCoursesPage from './components/pages/coursesPage/anyoneCourse/anyoneCourse';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="homepage" />} />
        <Route path="homepage" element={<Home />} />
        <Route path="coursesAllPage/*" element={<CoursesPageContainer />} />
        <Route path="coursesAllPage/:courseId" element={<AnyoneCoursesPage />} />
      </Routes>
      <FormHelp />
      <Footer />
    </div>
  );
}

export default App;
