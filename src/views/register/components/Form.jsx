import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    education: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = {
      ...form,
      [name]: value,
    };
    setForm(newForm);
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        newErrors[key] = 'Este campo es obligatorio';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const formData = {
      ...form,
      age: form.age === '' ? null : parseInt(form.age, 10),
    };

    try {
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200 || res.status === 201) {
        alert('Registro exitoso');
        navigate('/');
      } else {
        const errorData = await res.json();
        alert(`Error al registrar: ${errorData.message}`);
      }
    } catch (error) {
      alert('Error al registrar');
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Nombre</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <p>Email</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <p>Teléfono</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={form.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        <p>Edad</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="number"
          name="age"
          placeholder="Edad"
          value={form.age}
          onChange={handleChange}
          required
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        <p>Dirección</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
          required
        />
        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        <p>Educación</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="education"
          placeholder="Educación"
          value={form.education}
          onChange={handleChange}
          required
        />
        {errors.education && <p style={{ color: 'red' }}>{errors.education}</p>}
        <div style={{ paddingTop: '5%' }}>
          <button
            onClick={handleSubmitForm}
            style={{
              height: '50px',
              width: '200px',
              backgroundColor: '#399C7E',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold',
              textAlign: 'center',
              borderRadius: '5px',
            }}
            type="submit"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
