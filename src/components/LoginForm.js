import React, { useState } from 'react';
import { login } from '../api/auth';
import { Link } from 'react-router-dom'; // 引入 Link 组件
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // 新增状态

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      localStorage.setItem('token', response.token);
      setMessage('登录成功');
      setIsError(false);
    } catch (error) {
      console.error(error); // 添加日志以调试错误
      if (error && error.message) {
        setMessage(error.message);
      } else {
        setMessage('登录失败');
      }
      setIsError(true);
    }
  };

  return (
    <div className="login-form">
      <h2>登录</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="用户名" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="密码" required />
        <button type="submit">登录</button>
      </form>
      {message && <p className={isError ? 'error' : 'message'}>{message}</p>}
      <p>还没有账号？<Link to="/register">注册</Link></p> {/* 添加注册入口 */}
    </div>
  );
};

export default LoginForm;
