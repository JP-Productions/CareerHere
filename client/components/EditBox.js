import React, { useState } from 'react';

const EditBox = (props) => {
  const [msg, setMsg] = useState(props.message);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(msg);
        const body = {
          message: msg,
          id: props._id,
        };
        const res = await fetch('/message', {
          method: 'PUT',
          headers: {
            'Content-Type': 'Application/JSON',
          },
          body: JSON.stringify(body),
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data._id);
          console.log(data.message);
          props.exitEditMode();
        }
      }}
    >
      <input
        className='inputBox'
        type='text'
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <input type='submit' value='edit' className='sendButton' />
    </form>
  );
};

export default EditBox;
