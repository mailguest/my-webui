import React, { useState } from 'react';
import { register } from '../api/auth';
import './RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(username, password);
      setMessage(response.message);
    } catch (error) {
      setMessage(error.message || '注册失败');
    }
  };

  return (
    <div className="register-form">
      <h2>注册</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="用户名" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="密码" required />
        <button type="submit">注册</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
