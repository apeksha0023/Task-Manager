import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response =
      await API.post(
        "/auth/login",
        formData
      );

    console.log(response.data);

    localStorage.setItem(
      "token",
      response.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(
        response.data.user
      )
    );

    alert("Login Successful");

    const role =
      response?.data?.user?.role;

    if (
      role &&
      role.toLowerCase() ===
        "admin"
    ) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data
        ?.message ||
        "Login Failed"
    );
  }
};

  return (
    <div className="auth-container">
      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don’t have an account?{" "}

          <Link to="/">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;