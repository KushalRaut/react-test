import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-XSRF-TOKEN': token,
      },
    };

    (async function () {
      const { data } = await axios.post(
        'https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search',
        {},
        config
      );
      setTableData(data.data);
    })();
  }, []);

  if (tableData.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center">
        <table className="table-auto border-collapse border border-slate-500">
          <thead className="border border-slate-500">
            <tr className="border border-slate-500">
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Sender Full Name</th>
              <th className="px-4 py-2">Receiver Full Name</th>
              <th className="px-4 py-2">Current Status</th>
              <th className="px-4 py-2">Send Amount</th>
            </tr>
          </thead>
          <tbody className="border border-slate-500">
            {tableData.map(function (val, i) {
              return (
                <tr key={i}>
                  <td key={val['id']}>{val['id']}</td>
                  <td key={val['Sender Full Name']}>
                    {val['Sender Full Name']}
                  </td>
                  <td key={val['Receiver Full Name']}>
                    {val['Receiver Full Name']}
                  </td>
                  <td key={val['Current Status']}>{val['Current Status']}</td>
                  <td key={val['Send Amount']}>{val['Send Amount']}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
