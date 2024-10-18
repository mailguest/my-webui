import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedLink = ({ to, onClick, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      if (onClick) {
        onClick(e);
      } else {
        navigate(to);
      }
    }
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default ProtectedLink;