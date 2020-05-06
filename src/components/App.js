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
import { Blog } from './Blog';

import './Styles/App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/about' component={About} />
      <Route exact path='/blog' component={Blog} />
      <Footer />
    </Router>
  );
}
