import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import Register from './views/register/Register';
import Edit from './views/edit/Edit';
import './App.css';
import Users from './views/users/Users';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users/:id" element={<Users />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;
