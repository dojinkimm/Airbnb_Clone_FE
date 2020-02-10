import React, {
  useState,
  createContext,
  Dispatch,
  useEffect,
  useReducer,
  SetStateAction
} from 'react';
import { AuthenticationState } from '../types/States';
import { useCookies } from 'react-cookie';

export const defaultAuthState: AuthenticationState = {
  isAuth: false,
  token: ''
};

export interface AuthAction {
  type: string;
  value: AuthenticationState;
}

export function authReducer(state: AuthenticationState, action: AuthAction) {
  switch (action.type) {
    case 'LOGOUT': {
      return defaultAuthState;
    }
    case 'LOGIN': {
      return action.value || state;
    }
    default: {
      throw new Error('unexpected action');
    }
  }
}

export interface AuthReducer {
  (state: AuthenticationState, action: AuthAction): AuthenticationState;
}

export const AuthState = createContext<AuthenticationState>(defaultAuthState);
export const AuthDispatch = createContext<Dispatch<AuthAction>>(() => {});

export const LoginDispatch = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {}
);

export default function AuthProvider({
  children
}: {
  children: React.ReactElement;
}) {
  const [cookies, , removeCookie] = useCookies(['UID']);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [authState, authStateDispatcher] = useReducer<AuthReducer>(
    authReducer,
    defaultAuthState
  );

  useEffect(() => {
    if (!cookies['UID']) return;

    setLoggedIn(true);
  }, [cookies]);


  useEffect(() => {
    if (!loggedIn) return;
    
    authStateDispatcher({
      type: 'LOGIN',
      value: {
        isAuth: loggedIn,
        token: cookies['UID']
      }
    });
  }, [loggedIn, cookies, removeCookie]);

  return (
    <AuthDispatch.Provider value={authStateDispatcher}>
      <AuthState.Provider value={authState}>
        <LoginDispatch.Provider value={setLoggedIn}>
          {children}
        </LoginDispatch.Provider>
      </AuthState.Provider>
    </AuthDispatch.Provider>
  );
}
