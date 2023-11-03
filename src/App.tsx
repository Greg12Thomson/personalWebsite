import React from "react";

import AboutMe from "./components/AbountMe";
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer';
import Hero from './components/Hero'

import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />

      <AboutMe />

      <Experience />

      <Education />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
