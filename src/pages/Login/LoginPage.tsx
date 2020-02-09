import React from 'react';
import LoginUI from './ui/LoginUI';

const { SERVER_URL } = process.env;

export default function LoginPage(): React.ReactElement {
 
  return (
    <React.Fragment>
      <LoginUI />
    </React.Fragment>
  );
}
