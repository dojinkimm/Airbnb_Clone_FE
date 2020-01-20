import React from 'react';
import { NavBar } from '../../components/NavBar';
import { Filter } from '../../components/Filter';


export default class SearchPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Filter />
      </React.Fragment>
    );
  }
}
