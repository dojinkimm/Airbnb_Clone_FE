import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage  from './pages/homepage';
import LoginPage from './pages/login';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  );
}

export default App;
