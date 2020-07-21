import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './components/styles.css';

import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div id="app">
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
