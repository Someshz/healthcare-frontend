import React from 'react';
import './App.css';
import {Classcomponent} from './components/classcomponents';
import {Register} from './components/register';
import  Rav  from './components/nav';
import  Photo  from './components/image';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <Rav />
    <Switch>
    <Route  path = "/" exact component = {Photo} />
    <Route  path = "/hospitals" exact component = {Classcomponent} />    
    <Route exact path="/register" component={Register} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
