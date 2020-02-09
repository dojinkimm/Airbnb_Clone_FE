import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import SearchPage from './pages/Search/SearchPage';
import RoomPage from './pages/Room/RoomPage';
import UploadRoomPage from './pages/UploadRoom/UploadRoomPage';
import GlobalStoreProvider from './store';
import { AuthState } from './store/authStatus';
import './App.css';

const App: React.FC = () => {
  const authState = useContext(AuthState);

  return (
    <GlobalStoreProvider>
      <Router>
        <Switch>
          {authState.isAuth ? (
            <Route exact path="/upload-room" component={UploadRoomPage} />
          ) : (
            <Route exact path="/login" component={LoginPage} />
          )}
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/room" component={RoomPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Router>
    </GlobalStoreProvider>
  );
};

export default App;
