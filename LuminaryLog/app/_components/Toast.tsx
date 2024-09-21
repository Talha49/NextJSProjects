// components/Toast.tsx
import React from 'react';

interface ToastProps {
  message: string;
  type: 'loading' | 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div className={`fixed top-55 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded ${bgColor} text-white`}>
      {message}
    </div>
  );
};

export default Toast;


