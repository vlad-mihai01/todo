import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './header.js';

import { signOut } from "../actions";

class App extends Component {
  render() {
    return (
      <div>
      <Header signOut={this.props.signOut} />
      {this.props.children}
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signOut}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
