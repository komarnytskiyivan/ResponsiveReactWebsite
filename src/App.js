import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/HomePage/Home'
import PrintFile from './components/pages/PrintFile/PrintFile'
import History from './components/pages/History/History'
import AddPages from './components/pages/AddPages/AddPages'
import SignIn from './components/pages/SignIn/SignIn'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/PrintFile' exact component={PrintFile}/>
        <Route path='/History' exact component={History}/>
        <Route path='/AddPages' exact component={AddPages}/>
        <Route path='/SignIn' exact component={SignIn}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
