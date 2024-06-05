import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from './components/Form';  // Asegúrate de importar el componente Form

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    education: ''
  });

  const fetchUserById = async () => {
    const response = await fetch('http://localhost:3000/users/' + id);
    const data = await response.json();
    setForm(data);
  };

  const handleSubmitForm = async (form) => {
    try {
      const response = await fetch('http://localhost:3000/users/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Usuario actualizado exitosamente');
        navigate(`/users/${id}`);
      } else {
        alert('Error al actualizar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al actualizar el usuario');
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  return (
    <div>
      <h1>Editar Usuario</h1>
      <Form initialFormState={form} onSubmit={handleSubmitForm} />
    </div>
  );
};

export default Edit;
