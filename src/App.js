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
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

const PROJECTS = [
  "autobeats", "chessview", "gozero", "seashell", "betterbnb", "imageworks", "quickmath", "cses",
]

function App() {

  let routes = PROJECTS.map((project, i) => {
    return (
      <Route path={`/${project}`} component={() => <Project pr={i} />} />
    )
  })

  return (
    <div id="app">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {routes}
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
