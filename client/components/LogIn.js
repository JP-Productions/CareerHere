import React, { useState } from 'react';

const LogIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  return (
    <div>
      <form className='entryFields'>
        <div id='usernameBox'>
          <label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='username'
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
        </div>
        <div id='passwordBox'>
          <label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <div className='logInButtonContainer'>
          <input
            className='logInButton'
            id='logInButton'
            type='submit'
            value='log in'
            onClick={async (e) => {
              e.preventDefault();
              const body = { username: username, password: password };
              let res = await fetch('/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'Application/JSON',
                },
                body: JSON.stringify(body),
              });
              res = await res.json();
              if (res.loggedIn) props.logInUser(username);
              else setError(true);
            }}
          />
          <input
            className='logInButton'
            id='checkButton'
            type='submit'
            value='check in'
            onClick={async (e) => {
              e.preventDefault();
              let res = await fetch('/check', {
                method: 'PUT',
              });
              res = await res.json();
              if (res.loggedIn) props.logInUser(res.username);
              else setError(true);
            }}
          />
          <input
            className='logInButton'
            id='registerButton'
            type='submit'
            value='register'
            onClick={async (e) => {
              e.preventDefault();
              const body = { username: username, password: password };
              let res = await fetch('/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'Application/JSON',
                },
                body: JSON.stringify(body),
              });
              res = await res.json();
              if (res.loggedIn) props.logInUser(username);
              else setError(true);
            }}
          />
        </div>
      </form>
      {error ? (
        <p className='loginFail'>Wrong username/password combo</p>
      ) : null}
    </div>
  );
};
export default LogIn;
