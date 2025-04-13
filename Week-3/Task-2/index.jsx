import React, { useState } from "react";

const FormLogger = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", input);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 rounded mr-2"
        placeholder="Enter something"
        value={input}
        onChange={handleInputChange}
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormLogger;
