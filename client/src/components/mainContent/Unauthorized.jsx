import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  
  return (
    <div>
      <p>Unauthorized</p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Unauthorized;
