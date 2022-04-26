import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    login_id: '',
    login_password: '',
  });

  const navigate = useNavigate();

  //   Function to set the values of input field in state variable
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to perform a post request to the server for Login
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://jp-dev.cityremit.global/web-api/config/v1/auths/login',
        formData
      );

      if (data.success) {
        localStorage.setItem('token', data.data[0].jwt_token);
        navigate('/dashboard');
        console.log(data.data[0].jwt_token);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Opps! Login Failed`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <form
        className="w-full h-screen flex justify-center items-center flex-col"
        onSubmit={onSubmit}
      >
        <h1 className="text-3xl font-bold m-5">LOG IN</h1>
        <input
          className="border-solid border-2 border-gray-400 rounded-sm w-72 h-8 p-1"
          id="email"
          type="email"
          name="login_id"
          placeholder="Enter your Name"
          onChange={onChange}
        />
        <br />
        <input
          className="border-solid border-2 border-gray-400 rounded-sm w-72 h-8 p-1"
          id="password"
          type="password"
          name="login_password"
          placeholder="Enter Password"
          onChange={onChange}
        />
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-5 rounded m-3"
          type="submit"
        >
          LOG IN
        </button>
      </form>
    </>
  );
};

export default Login;
