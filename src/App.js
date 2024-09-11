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
import NewsPageContainer from './components/pages/news/newsPageContainer.jsx';
import AboutAcademy from './components/pages/aboutAcademy/aboutAcademy.jsx';
import ScrollToTop from './components/scrollToTop/scrollToTop.jsx';
import Contacts from './components/pages/contacts/contacts.jsx';
import AuthPageContainer from './components/pages/authPage/authPageContainer.jsx';
import CareerPage from './components/pages/careerPage/careerPage.jsx';
import TestPage from './components/pages/testPage/testPage.jsx';
import SummerCampPageContainer from './components/pages/summerCampPageContainer/summerCampPageContainer.jsx';


function App(props) {
  return (
    <div className="App">
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigate to="homepage" />} />
          <Route path="homepage" element={<Home />} />
          <Route path="coursesAllPage/*" element={<CoursesPageContainer />} />
          <Route path="coursesAllPage/:courseId" element={<AnyoneCoursesPage />} />
          <Route path="allEvents/*" element={<EventsPage />} />
          <Route path="allEvents/:eventId" element={<AnyoneEventsPage />} />
          <Route path="news/*" element={<NewsPageContainer />} />
          <Route path="/aboutAcademy" element={<AboutAcademy />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/enter" element={<AuthPageContainer />} />
          <Route path="/careerPage" element={<CareerPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/summerCamp" element={<SummerCampPageContainer />} />
        </Routes>
      </ScrollToTop>
      <FormHelp />
      <Footer />
    </div>
  );
}

export default App;
