import React, { useState } from "react";

const ChatBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMessageSend = async () => {
    if (!message) return;

    setIsLoading(true);
    try {
      const response = await onSendMessage(message);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: message },
        { role: "bot", content: response },
      ]);
      setMessage("");
      console.log("Chat history:", chatHistory);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonStyle = {
    height: "50px",
    width: "100px",
    marginTop: "10px",
    backgroundColor: "#399C7E",
    border: "none",
    color: "white",
    cursor: isLoading ? "not-allowed" : "pointer",
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
    <div style={{ marginTop: "20px", width: "100%" }}>
      <h3>Chat</h3>
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
          width: "350px",
        }}
      >
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{ textAlign: msg.role === "user" ? "right" : "left" }}
          >
            <p>
              <strong>{msg.role === "user" ? "Tú:" : "Nearby:"}</strong>{" "}
              {msg.content}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "calc(100% - 110px)", marginRight: "10px" }}
        disabled={isLoading}
      />
      <button
        onClick={handleMessageSend}
        style={{
          ...buttonStyle,
          ...(hoveredButton === "send" ? buttonHoverStyle : {}),
        }}
        onMouseEnter={() => setHoveredButton("send")}
        onMouseLeave={() => setHoveredButton(null)}
        disabled={isLoading}
      >
        {isLoading ? "Cargando..." : "Enviar"}
      </button>
    </div>
  );
};

export default ChatBox;
