import React from 'react'
import { Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Info from './components/UserInfo';

export default (
  <div>
    <Route exact path="/" component={App}></Route>
    <Route path="/index" component={Home}></Route>
    <Route path="/about" component={Home}></Route>
    <Route path="/info" component={Info}></Route>

  </div>
)
