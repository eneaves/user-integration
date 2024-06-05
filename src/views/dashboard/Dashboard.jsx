import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filterName, setFilterName] = useState('');

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <Header filterName={filterName} handleFilterChange={handleFilterChange} />
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1%",
      }}>
        <h1 style={{ textAlign: 'center' }}>Usuarios</h1>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
          {filteredUsers.map((user) => (
            <div key={user.id} style={{ margin: '10px' }}>
              <Card user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
