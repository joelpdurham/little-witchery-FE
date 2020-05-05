import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import { Header } from './common/Header';
import { LandingPage } from './LandingPage';
import { Footer } from './common/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Footer />
    </Router>
  );
}
