import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const handelSubmit = async (e) => {
    e.preventDefault();

    const config = {
      url: 'http://localhost:3000/register/complete',
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, config);
    toast.success('Email is Successfully Send');

    window.localStorage.setItem('emailForm', email);
    setEmail('');
  };

  const registerForm = () => (
    <form onSubmit={handelSubmit}>
      <input
        type='email'
        className='form-control'
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email address'
      />
      <br />
      <button type='submit' className='btn btn-raised'>
        Register
      </button>
    </form>
  );
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
