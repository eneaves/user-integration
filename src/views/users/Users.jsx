import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardSlider from './components/CardSlider';
import CardInfo from './components/CardInfo';
import Header from '../dashboard/components/Header'; 
import DescriptionCard from './components/DescriptionCard';
import ChatBox from './components/ChatBox';

const Users = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    description: "",
    prescription: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [descriptions, setDescriptions] = useState([]);
  const [user, setUser] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  const [hoveredButton, setHoveredButton] = useState(null);

  const fetchDescription = async () => {
    const response = await fetch(`http://localhost:3000/description/${id}`);
    const data = await response.json();
    const uniqueData = data.filter((value, index, self) => 
      index === self.findIndex((t) => (
        t.id === value.id
      ))
    );
    setDescriptions(uniqueData);
    console.log('Description data:', uniqueData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const fetchUserById = async () => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    setUser(data);
    console.log('User data:', data);
  };

  const handleGenerateHelp = async () => {
    const prompt = {
      prompt: form.description,
    };
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prompt),
      });
      const data = await response.json();
      setForm((prevForm) => ({
        ...prevForm,
        prescription: data.response,
      }));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/description/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: form.description, prescription: form.prescription }),
      });
  
      if (response.ok) {
        alert('Ejercicio guardado exitosamente');
      } else {
        alert('Error al guardar el ejercicio');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al guardar el ejercicio');
    }
  };

  useEffect(() => {
    console.log('useEffect called');
    const fetchData = async () => {
      console.log('Fetching data...');
      await fetchUserById();
      await fetchDescription();
      setDataFetched(true);
      console.log('Data fetched and state updated');
    };
    if (!dataFetched) {
      fetchData();
    }
  }, [id]); // Solo dependemos de `id`

  const handleSendMessage = async (message) => {
    if (!message) {
      throw new Error("Message cannot be empty");
    }
  
    const queryParams = new URLSearchParams({ message }).toString();
    const response = await fetch(`http://localhost:3000/chat/context?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
  
    const data = await response.json();
    
    if (!data.response) {
      throw new Error("Response from server is empty");
    }
  
    return data.response;
  };

  const buttonStyle = {
    height: "50px",
    width: "180px",
    marginTop: "10px",
    backgroundColor: "#399C7E",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2d7a5e",
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0', position: 'relative'}}>
        <CardSlider>
          {descriptions.map((desc, index) => (
            <DescriptionCard key={desc.id || index} description={desc.description} prescription={desc.prescription} />
          ))}
        </CardSlider>
      </div>
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          alignItems: "flex-start"
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "350px"
          }}
        >
          <CardInfo user={user} />
          <button
            style={{ ...buttonStyle, ...(hoveredButton === 'edit' ? buttonHoverStyle : {}) }}
            onClick={() => navigate(`/edit/${id}`)}
            onMouseEnter={() => setHoveredButton('edit')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Editar Usuario
          </button>
        </div>
        
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "350px"
          }}
        >
          <p>Description</p>
          <textarea
            label="Descripcion"
            value={form.description}
            name="description"
            onChange={handleInputChange}
            style={{ width: "350px", height: "200px", marginBottom: "20px" }}
          />
          <p>Respuesta</p>
          <textarea
            label="Respuesta"
            value={form.prescription}
            name="prescription"
            onChange={handleInputChange}
            style={{ width: "350px", height: "200px", marginBottom: "20px" }}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              style={{ ...buttonStyle, ...(hoveredButton === 'generate' ? buttonHoverStyle : {}) }}
              disabled={isLoading}
              onClick={handleGenerateHelp}
              onMouseEnter={() => setHoveredButton('generate')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {isLoading ? "Cargando" : "Generar Respuesta"}
            </button>
            <button
              style={{ ...buttonStyle, ...(hoveredButton === 'save' ? buttonHoverStyle : {}) }}
              onClick={handleSave}
              onMouseEnter={() => setHoveredButton('save')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Guardar Respuesta
            </button>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
           	alignItems: "center",
            maxWidth: "350px"
          }}
        >
          <ChatBox onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Users;
