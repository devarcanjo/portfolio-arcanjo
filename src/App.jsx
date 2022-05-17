import './App.css'
import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About/'
import Experience from './components/Experience/'
import Portfolio from './components/Portfolio/'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default App
