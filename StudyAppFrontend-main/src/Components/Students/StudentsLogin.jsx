import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginStudent } from '../../Redux/Auth/AuthSlice.js';

const Login = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });
  const [identifierType, setIdentifierType] = useState('Email or Mobile');
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });

    if (name === 'identifier') {
      updateIdentifierType(value);
    }
  };

  const updateIdentifierType = (identifier) => {
    if (isEmail(identifier)) {
      setIdentifierType('Email');
    } else if (isMobile(identifier)) {
      setIdentifierType('Mobile');
    } else {
      setIdentifierType('Email or Mobile');
    }
  };

  const isEmail = (identifier) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(identifier);
  };

  const isMobile = (identifier) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(identifier);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { identifier, password } = loginData;
    try{
        const res = await axios.post(`${baseUrl}student/login`,{
            email:identifier,
            password,
            mobile:identifier
        })
        console.log(res.data);
        dispatch(loginStudent({user:res.data.user,token:res.data.token,classes:res.data.classes,isVerified:res.data.isVerified}));
        alert("Login successful");
        window.location.href = '/';
    }catch(e){
        console.error(e);
        alert("Invalid credentials");
    }
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {identifierType}
            </label>
            <input
              type="text"
              name="identifier"
              value={loginData.identifier}
              onChange={handleChange}
              className="input input-bordered w-full mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="input input-bordered w-full mt-1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
