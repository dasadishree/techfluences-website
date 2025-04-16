import React from 'react';
import NavBar from "./components/NavBar";
import TutorialPage from "./components/TutorialPage";
import Footer from "./components/Footer";
import './App.css';

function TutorialApp() {
  return (
    <>
      <NavBar />
      <TutorialPage />
      <Footer />
    </>
  );
}

export default TutorialApp; 