import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import MessageDisplay from '../components/MessageDisplay';
import InputBox from '../components/InputBox';
import EditBox from '../components/EditBox';

const mapStateToProps = (state) => ({
  changeableMsg: state.message.message,
  _id: state.message.id,
  editMode: state.message.editMode,
});

const mapDispatchToProps = (dispatch) => ({
  selectMsgForEdit: (message, id) =>
    dispatch(actions.switchedToEdit(message, id)),
  exitEditMode: () => dispatch(actions.editMade()),
});

class ChatRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='chatRoom'>
        <div className='chatHeader'>
          <h3>{this.props.username}</h3>
          <button
            className='logOutButton'
            onClick={async () => {
              let res = await fetch('/logout', {
                method: 'DELETE',
              });
              res = await res.json();
              if (res.loggedOut) this.props.logOutUser();
            }}
          >
            Log Out
          </button>
        </div>

        <MessageDisplay
          username={this.props.username}
          editMode={this.props.editMode}
          selectMsgForEdit={this.props.selectMsgForEdit}
        />
        {this.props.editMode ? (
          <EditBox
            _id={this.props._id}
            message={this.props.changeableMsg}
            exitEditMode={this.props.exitEditMode}
          />
        ) : (
          <InputBox username={this.props.username} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
