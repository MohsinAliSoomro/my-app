import React from "react";
import { v4 as uuidv4 } from "uuid";

function Login({ userId, setUserId, setDashboardShow }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("senderId", userId);
    setDashboardShow(true);
  };

  const generateId = () => {
    setUserId(uuidv4());
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="id..."
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button>Login</button>
      </form>
      <button onClick={generateId}>Generate id </button>
    </div>
  );
}

export default Login;
