/* eslint-disable react/prop-types */
import userImage from "../../../assets/userImage.svg";

const CardInfo = ({ user }) => {
  return (
    <div
      style={{
        width: "250px",
        height: "450px",
        backgroundColor: "white",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        src={userImage}
        width={80}
        alt="avatar"
        style={{ borderRadius: "50%" }}
      />
      <div style={{ marginTop: "20px", width: "100%" }}>
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>Nombre</p>
        <p style={{ margin: "5px 0", color: "#555" }}>{user.name}</p>
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>Email</p>
        <p style={{ margin: "5px 0", color: "#555" }}>{user.email}</p>
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>Teléfono</p>
        <p style={{ margin: "5px 0", color: "#555" }}>{user.phone}</p>
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>Edad</p>
        <p style={{ margin: "5px 0", color: "#555" }}>{user.age}</p>
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>Dirección</p>
        <p style={{ margin: "5px 0", color: "#555" }}>{user.address}</p>
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>Educación</p>
        <p style={{ margin: "5px 0", color: "#555" }}>{user.education}</p>
      </div>
    </div>
  );
};

export default CardInfo;
