import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import AddInventory from './Pages/AddInventory';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/AddInventory' component={AddInventory}/>
      </Switch>
    </div>
  );
}

export default App;
