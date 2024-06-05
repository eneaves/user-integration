import React, { useState } from 'react';

const DescriptionCard = ({ description, prescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      onClick={handleCardClick}
      style={{
        padding: '10px',
        margin: '10px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: 'white',
        width: isExpanded ? '300px' : '250px',
        transition: 'width 0.3s ease',
        textAlign: 'left',
      }}
    >
      <p><strong>Descripción:</strong> {isExpanded ? description : `${description ? description.slice(0, 50): "N/A"}...`}</p>
      <p><strong>Respuesta:</strong> {isExpanded ? prescription : `${prescription ? prescription.slice(0, 50): "N/A"}...`}</p>
    </div>
  );
};

export default DescriptionCard;
