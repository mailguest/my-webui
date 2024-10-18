import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedButton = ({ onClick, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default ProtectedButton;