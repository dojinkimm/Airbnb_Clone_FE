import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage  from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <Route path="/" component={MainPage}/>
      </Switch>
    </Router>
  );
}

export default App;
