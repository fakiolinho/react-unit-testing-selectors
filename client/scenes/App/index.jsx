import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
