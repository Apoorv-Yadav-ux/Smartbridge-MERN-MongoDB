import React, { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Type something..."
        value={text}
        onChange={handleInputChange}
      />
      <p className="mt-2 text-gray-700">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
