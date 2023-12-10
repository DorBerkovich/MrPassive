import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMassage } from "../../api/api";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function Contact() {
  const [massage, setMassage] = useState("");
  const textRef = useRef();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => textRef.current.focus(), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosPrivate.post("/contact", { massage });
      console.log(response);
      setMassage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>tell me what you think</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={massage}
          type="text"
          onChange={(e) => setMassage(e.target.value)}
          autoComplete="off"
          ref={textRef}
        />
        <button type="submit"> send </button>
      </form>
    </div>
  );
}
