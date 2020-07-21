import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
