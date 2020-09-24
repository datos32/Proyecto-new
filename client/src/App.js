import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Footer from './app/components/Layout/Footer';
import Header from './app/components/Layout/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route></Route>
        <Route></Route>
        <Footer></Footer>
      </Switch>
    </Router>
  );
}

export default App;
