import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import { Header } from './common/Header';
import { LandingPage } from './LandingPage';
import { Footer } from './common/Footer';
import { About } from './About';

import './Styles/App.css'

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/about' component={About} />
      <Footer />
    </Router>
  );
}
