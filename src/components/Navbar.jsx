import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <div className="w-full h-20 bg-gray-700 flex justify-end items-center px-10">
        <button
          className="border border-slate-500 bg-white rounded-md px-4 py-1 font-sans font-semibold"
          onClick={logoutHandler}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Navbar;
