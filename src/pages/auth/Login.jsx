import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../../firebase';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // ------------- Login with Google -----------------------------

  // ------------- Login with Email and Password -----------------------------
  const handelSubmit = async (e) => {
    e.preventDefault();
  };

  const loginForm = () => (
    <form onSubmit={handelSubmit}>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          placeholder='Enter your email address'
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Your password'
        />
      </div>
      <br />
      <Button
        icon={<MailOutlined />}
        type='primary'
        className='mb-3'
        block
        shape='round'
        size='large'
        onClick={handelSubmit}>
        Login with Email/Password
      </Button>
    </form>
  );
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          {loading ? (
            <h4 className='text-denger'>Loading...</h4>
          ) : (
            <h4>Login</h4>
          )}
          {loginForm()}
          <Button
            icon={<GoogleOutlined />}
            type='danger'
            className='mb-3'
            block
            shape='round'
            size='large'>
            Login with Google
          </Button>
          <Link to='/forgot/password' className='float-right text-danger'>
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
