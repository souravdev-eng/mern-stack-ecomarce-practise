import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForm'));
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Email and password are required to complete registration');
      return;
    }
    if (password.length < 6) {
      toast.error('Please enter a strong password');
      return;
    }

    //* Check if the email is vaerifid
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        window.localStorage.removeItem('emailForm');
      }
      // remove email from local storage
      // historyget user id token
      let user = auth.currentUser;
      await user.updatePassword(password);
      let token = await user.getIdTokenResult();
      history.push('/');
    } catch (error) {
      toast.error(error.message);
    }
    // validation
  };

  const registerFormComplete = () => (
    <form onSubmit={handelSubmit}>
      <input
        type='email'
        className='form-control'
        autoFocus
        value={email}
        placeholder='Enter your email address'
        disabled
      />
      <br />
      <input
        type='password'
        className='form-control'
        autoFocus
        value={password}
        placeholder='Enter your email address'
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type='submit' className='btn btn-raised'>
        RegisterComplete
      </button>
    </form>
  );
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register Complete</h4>
          {registerFormComplete()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
