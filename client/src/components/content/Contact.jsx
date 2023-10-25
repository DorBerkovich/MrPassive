import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Contact() {
  const [userText, setUserText] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post();
    navigate("/protfolio");
  };

  return (
    <div>
      <h2>tell me what you think</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userText}
          minLength={2}
          maxLength={200}
          placeholder="hey dor..."
          onChange={handleChange}
        />
        <button type="submit"> send </button>
      </form>
    </div>
  );
}
