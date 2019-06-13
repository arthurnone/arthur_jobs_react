import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from '../components/index/index';
import About from '../components/index/about';
import Graph from '../components/graph/graph';
import Header from '../components/base/header';
import Footer from '../components/base/footer';


function AppRouter() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/" exact component={Index}/>
        <Route path="/graph" exact component={Graph}/>
        <Route path="/about" exact component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default AppRouter;