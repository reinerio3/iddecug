import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
<Router>
      <div className="app-container">
        <Header />
        <Sidebar/>
        <main className="main-content">
          <TransitionGroup>
            <CSSTransition
              key={window.location.pathname}
              timeout={500}
              classNames="fade"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </main>
        <Footer />
      </div>
    </Router>
  

  );
}

export default App;



/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
