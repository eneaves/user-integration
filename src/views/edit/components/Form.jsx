import { useState } from 'react';

const Form = ({ initialFormState, onSubmit }) => {
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
      <p>Nombre</p>
      <input
        style={{ height: '45px', width: '60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E' }}
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleInputChange}
      />
      <p>Email</p>
      <input
        style={{ height: '45px', width: '60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E' }}
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleInputChange}
      />
      <p>Teléfono</p>
      <input
        style={{ height: '45px', width: '60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E' }}
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleInputChange}
      />
      <p>Edad</p>
      <input
        style={{ height: '45px', width: '60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E' }}
        type="number"
        name="age"
        placeholder="Edad"
        value={form.age}
        onChange={handleInputChange}
      />
      <p>Dirección</p>
      <input
        style={{ height: '45px', width: '60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E' }}
        type="text"
        name="address"
        placeholder="Dirección"
        value={form.address}
        onChange={handleInputChange}
      />
      <p>Educación</p>
      <input
        style={{ height: '45px', width: '60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E' }}
        type="text"
        name="education"
        placeholder="Educación"
        value={form.education}
        onChange={handleInputChange}
      />
      <div style={{ paddingTop: '5%' }}>
        <button
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
          Guardar Cambios
        </button>
      </div>
    </form>
  );
};

export default Form;
