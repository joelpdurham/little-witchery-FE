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
import { Spells } from './Spells';
import { Shop } from './Shop';

import { Blog } from './Blog';
import { Videos } from './Videos';
import { Contact } from './Contact';

import './Styles/App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/about' component={About} />
      <Route exact path='/spells' component={Spells} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/videos' component={Videos} />
      <Route exact path='/contact' component={Contact} />
      <Footer />
    </Router>
  );
}
