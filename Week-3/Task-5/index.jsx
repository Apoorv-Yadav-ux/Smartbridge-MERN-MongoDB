import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto bg-white shadow rounded">
      <h2 className="text-xl mb-4 font-bold text-center">Login</h2>
      <input
        type="email"
        className="w-full p-2 mb-3 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
