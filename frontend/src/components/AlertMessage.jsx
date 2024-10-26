import React from "react";

const AlertMessage = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>x</button>
    </div>
  );
};

export default AlertMessage;
