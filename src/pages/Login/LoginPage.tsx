import React from 'react';
import LoginUI from './ui/LoginUI';

const AuthURL = (returnTo = '/'): string =>
  `http://localhost:3000/auth?returnTo=${returnTo}`;

export default class LoginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event: any) => {
    console.log(event);
  };

  render() {
    return <LoginUI />;
  }
}
