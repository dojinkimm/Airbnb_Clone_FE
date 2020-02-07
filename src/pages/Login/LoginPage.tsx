import React from 'react';
import LoginUI from './ui/LoginUI';

const { SERVER_URL } = process.env;

export default function LoginPage(): React.ReactElement {
  console.log(SERVER_URL);
  
  return (
    <React.Fragment>
      <LoginUI />
    </React.Fragment>
  );
}
