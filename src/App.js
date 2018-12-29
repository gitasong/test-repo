import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      // data: []
    }

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.submitSearchTerm = this.submitSearchTerm.bind(this);
  }

  updateSearchTerm = (event, {value}) => {
    this.setState({searchTerm: {value}});
    console.log(`updated searchTerm: ${value}`);
  }

  render() {
    return (
      <div className="App">
        <header as="h1">Title Sort</header>
        {/* filter/input component - fetch and filter data based on input string */}
        <Filter
          updateSearchTerm={this.updateSearchTerm}
          submitSearchTerm={this.submitSearchTerm}
          searchTerm={this.searchTerm}
        />
        {/* table component - conditionally render based on results of input filtering */}
          {/* table row component - render for each returned data object */}
      </div>
    );
  }
}

export default App;
