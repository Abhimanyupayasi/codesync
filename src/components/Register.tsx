import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Call your register API or mock register logic
    // Then navigate to the home page or other page
    navigate("/home");
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
