import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Home from './components/pages/home/home.jsx';
import FormHelp from './components/formHelp/formHelp.jsx';
import Footer from './components/footer/footer.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import CoursesPageContainer from './components/pages/coursesPage/coursesPageContainer.jsx';
import AnyoneCoursesPage from './components/pages/coursesPage/anyoneCourse/anyoneCourse.jsx';
import EventsPage from './components/pages/eventsPage/eventsPage.jsx';
import AnyoneEventsPage from './components/pages/eventsPage/anyoneEventsPage/anyoneEventsPage.jsx';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="homepage" />} />
        <Route path="homepage" element={<Home />} />
        <Route path="coursesAllPage/*" element={<CoursesPageContainer />} />
        <Route path="coursesAllPage/:courseId" element={<AnyoneCoursesPage />} />
        <Route path="allEvents/*" element={<EventsPage />} />
        <Route path="allEvents/:eventId" element={<AnyoneEventsPage />} />
      </Routes>
      <FormHelp />
      <Footer />
    </div>
  );
}

export default App;
