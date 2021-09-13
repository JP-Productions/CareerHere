import React from 'react';

const Message = (props) => {
  return (
    <div className='message'>
      <div className='msgHeader'>
        <p className='author'>{props.username}</p>
        <p className='date'>{props.date}</p>
      </div>
      <div>
        <p className='msg'>{props.message}</p>
      </div>
      <div className='editingButtons'>
        {props.ownerOn ? (
          <button
            className='deleteButton'
            onClick={async () => {
              console.log(props._id);
              const body = { id: props._id };
              const res = await fetch('/message', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'Application/JSON',
                },
                body: JSON.stringify(body),
              });
            }}
          >
            Delete
          </button>
        ) : null}
        {props.ownerOn && !props.editMode ? (
          <button
            className='editButton'
            onClick={() => {
              props.selectMsgForEdit(props.message, props._id);
            }}
          >
            Edit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
