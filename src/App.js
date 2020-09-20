import React from 'react';

import Home from './pages/Home';
import Singlerooms from './pages/Singlerooms';
import Error from './pages/Error';
import Rooms from './pages/rooms';
import Navbar from './components/Navbar';
import './App.css';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms/" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={Singlerooms}/>
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
