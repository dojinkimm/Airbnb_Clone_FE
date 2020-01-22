import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/default';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import SearchPage from './pages/Search/SearchPage';
import RoomPage from './pages/Room/RoomPage';
import './App.css';

interface AppProps {
  isLoggedIn: boolean;
}

const App: React.FC<AppProps> = ({ isLoggedIn }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Router>
    </ThemeProvider>
  );
};

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/search" component={SearchPage} />
    <Route exact path="/room" component={RoomPage} />
    <Route path="/" component={MainPage} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route exact path="/logout" component={LoginPage} />
    <Route exact path="/search" component={SearchPage} />
    <Route exact path="/room" component={RoomPage} />
    <Route path="/" component={MainPage} />
  </Switch>
);

export default App;
