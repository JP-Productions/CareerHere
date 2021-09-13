import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import LogIn from '../components/LogIn';
import ChatRoom from './ChatRoom';

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logInUser: (username) => dispatch(actions.userLoggedInCreator(username)),
  logOutUser: () => dispatch(actions.userLoggedOut()),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const output = [];
    if (!this.props.loggedIn)
      output.push(<LogIn logInUser={this.props.logInUser} />);
    else
      output.push(
        <ChatRoom
          logOutUser={this.props.logOutUser}
          username={this.props.currentUser}
        />
      );
    return output;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
