import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <p>This page is missing</p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Missing;
