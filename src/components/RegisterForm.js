import React, { useState } from 'react';
import { register } from '../api/auth';
import { Link } from 'react-router-dom'; // 引入 Link 组件
import './RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('两次输入的密码不匹配');
      setIsError(true);
      return;
    }
    try {
      const response = await register(username, password);
      if (response && response.data && response.data.message) {
        setMessage(response.data.message);
        setIsError(false);
      } else {
        setMessage('注册成功');
        setIsError(false);
      }
    } catch (error) {
      console.error(error); // 添加日志以调试错误
      if (error && error.data && error.data.message) {
        setMessage(error.data.message);
      } else {
        setMessage('注册失败');
      }
      setIsError(true);
    }
  };

  return (
    <div className="register-form">
      <h2>注册</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="用户名" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="密码" required />
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="确认密码" required />
        <button type="submit">注册</button>
      </form>
      {message && <p className={isError ? 'error' : 'message'}>{message}</p>}
      <p>已经有账号？<Link to="/login">去登录</Link></p> {/* 添加去登录入口 */}
    </div>
  );
};

export default RegisterForm;
