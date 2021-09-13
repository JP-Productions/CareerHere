import React, { useState } from 'react';

const InputBox = (props) => {
  const [msg, setMsg] = useState('');
  console.log(props.username);
  return (
    <form
      className='chatBot'
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(msg);
        const body = {
          createdBy: props.username,
          createdAt: Date.now(),
          message: msg,
        };
        const res = await fetch('/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/JSON',
          },
          body: JSON.stringify(body),
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data._id);
          setMsg('');
        }
      }}
    >
      <input
        className='inputBox'
        type='text'
        value={msg}
        placeholder='Send a Message...'
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <input type='submit' value='send' className='sendButton' />
    </form>
  );
};

export default InputBox;
