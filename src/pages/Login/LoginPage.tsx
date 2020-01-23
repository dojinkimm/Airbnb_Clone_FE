import React from 'react';
import LoginUI from './ui/LoginUI';

const { SERVER_URL } = process.env;



const AuthURL = 
  `${SERVER_URL}/login?returnTo=/`;

export default class LoginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(SERVER_URL);

    this.state = {
      value: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event: any) => {
    console.log(event);
  };

  render() {
    return <LoginUI/>;
  }
}
