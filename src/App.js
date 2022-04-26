import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
//Toast package to display messages in browser
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
