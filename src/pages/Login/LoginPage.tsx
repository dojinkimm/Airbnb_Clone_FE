import React from 'react';
import LoginUI from './ui/LoginUI';

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
