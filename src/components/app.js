import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WheatherList from '../containers/wheather_list';

// this is a dumb componenet that only displays other
// dumb and smart componenets

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WheatherList />
      </div>
    );
  }
}
