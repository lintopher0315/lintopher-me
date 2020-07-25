import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/styles.css';

import Home from './components/Home';
import Project from './components/Project';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id="app">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/autobeats" component={Project} pr={1} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
