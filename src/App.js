import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import '@ppeou/my-component/plm-pct-input';

class App extends Component {
  static defaultProps = {
    grade: 44.44,
  };
  render() {
    const {grade} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 1
          </a>
          <div>
            <label>Grade Input: <b>{grade}</b></label>
            <plm-pct-input value={grade}></plm-pct-input>
          </div>
        </header>
      </div>
    );
  }

  componentDidMount() {
    //ReactDOM.findDOMNode(this).addEventListener('value-changed', this.onValueChanged);
    ReactDOM.findDOMNode(this).addEventListener('the-abc', this.onValueChanged);
  }

  onValueChanged(event) {
    console.log(event);
  }
}

export default App;
