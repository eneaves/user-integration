import { useNavigate } from "react-router-dom";

const Header = ({ filterName, handleFilterChange }) => {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <div style={styles.left} onClick={() => navigate("/")}>
        USER-INTEGRATION
      </div>
      <div style={styles.center}>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={filterName}
          onChange={handleFilterChange}
          style={styles.input}
        />
      </div>
      <div style={styles.right}>
        <button style={styles.button} onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f8f8",
    borderBottom: "1px solid #ddd",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  },
  left: {
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  right: {},
  button: {
    padding: "10px 20px",
    backgroundColor: "#399C7E",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "300px",
  },
};

export default Header;
