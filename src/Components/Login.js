import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, dispatch, error, loading } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      // console.log(credentials);
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
      // console.log(res.data.data);
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  console.log(user);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Username"
          id="username"
          // value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          // value={credentials.password}
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <span> {error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
