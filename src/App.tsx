import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import SearchPage from './pages/Search/SearchPage';
import RoomPage from './pages/Room/RoomPage';
import UploadRoomPage from './pages/UploadRoom/UploadRoomPage';
import MyPage from './pages/MyPage/MyPage';
import { NotFound } from './components';
import GlobalStoreProvider from './store';
import { AuthState } from './store/authStore';
import './App.css';

const App: React.FC = () => {
  return (
    <GlobalStoreProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/room" component={RoomPage} />
          <PublicRoute exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/upload-room" component={UploadRoomPage} />
          <PrivateRoute exact path="/mypage" component={MyPage} />
          <Route path="*" component={NotFound} />
          
        </Switch>
      </Router>
    </GlobalStoreProvider>
  );
};

export default App;

export const PrivateRoute = ({
  component: Component,
  ...rest
}: any): React.ReactElement => {
  const authState = useContext(AuthState);

  return (
    <Route
      {...rest}
      render={(props: any) => {
        return authState.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export const PublicRoute = ({
  component: Component,
  ...rest
}: any): React.ReactElement => {
  const authState = useContext(AuthState);

  return (
    <Route
      {...rest}
      render={(props: any) => {
        return !authState.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};