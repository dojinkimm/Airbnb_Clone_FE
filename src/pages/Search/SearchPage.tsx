import React from 'react';
import { NavBar } from '../../components/NavBar';
import { Filter } from '../../components/Filter';
import logo from '../../assets/logo.svg';

export default class SearchPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar logo={logo} path={'/search'} hasTextField={true} />
        <Filter />
      </React.Fragment>
    );
  }
}
