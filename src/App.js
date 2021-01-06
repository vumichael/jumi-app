import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Blogcreation from './components/pages/blogCreation';

function App() {
  return (
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/artikelerstellen' exact component={Blogcreation}/>
       </Switch>
    </Router>
  );
}

export default App;
