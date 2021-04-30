import React from 'react';
import './App.css';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import Selector from './page/Selector/Selector';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route extact={true} path="/register" component={Register}/>
            <Route extact={true} path="/login" component={Login}/>
            <Route extact={true} path="/selector" component={Selector}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
