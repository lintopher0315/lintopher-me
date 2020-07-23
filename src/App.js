import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/styles.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id="app">
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
