import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMassage } from "../../api/api";

export default function Contact() {
  const [massage, setMassage] = useState("");
  const navigate = useNavigate();
  const userId = 1;

  const handleChange = (event) => {
    setMassage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postMassage(massage, userId);
    navigate("/protfolio");
  };

  return (
    <div>
      <h2>tell me what you think</h2>
      <form onSubmit={handleSubmit}>
        
        <button type="submit"> send </button>
      </form>
    </div>
  );
}
