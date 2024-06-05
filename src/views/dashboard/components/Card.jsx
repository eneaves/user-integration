/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import userImage from '../../../assets/userImage.svg';

const Card = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div
      style={cardStyle}
      onClick={handleClick}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d7a5e')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#399C7E')}
    >
      <div style={{ paddingRight: '15px' }}>
        <img src={userImage} width={50} alt="user" />
      </div>
      <div>
        <p style={textStyle}>{user.name}</p>
      </div>
    </div>
  );
};

const cardStyle = {
  width: '300px',
  backgroundColor: '#399C7E',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  height: '120px',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const textStyle = {
  margin: 0,
  fontWeight: 'bold',
  fontSize: '18px',
  color: 'white',
};

export default Card;
