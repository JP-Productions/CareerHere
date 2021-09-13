import React, { useState, useEffect } from 'react';
import Message from './Message';

const MessageDisplay = (props) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetchMessages();
  }, [messages]);
  const fetchMessages = async () => {
    const res = await fetch('/message');
    if (!res.ok) console.log(response);
    const msgs = await res.json();
    setMessages(msgs);
  };

  const output = messages.map((obj, i) => {
    const username = obj.createdBy;
    let date = new Date(obj.createdAt);
    date = date.toLocaleString('en-US');

    return (
      <Message
        username={username}
        date={date}
        message={obj.message}
        _id={obj._id}
        ownerOn={props.username === username}
        editMode={props.editMode}
        selectMsgForEdit={props.selectMsgForEdit}
        key={i}
      />
    );
  });

  return <div className='messageBox'>{output}</div>;
};

export default MessageDisplay;
