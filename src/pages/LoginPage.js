import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Paper, Typography } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple login validation
    if (username.trim() === "admin" && password.trim() === "password") {
      navigate("/users");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        style={{
          padding: "20px",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "20px", color: "#1976d2" }}
        >
          Admin Login
        </Typography>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
        {/* Forgot Password Note */}
        <Typography
          style={{
            marginTop: "15px",
            textAlign: "center",
            color: "#555555",
            fontSize: "0.9rem",
          }}
        >
          Forgot your password?{" "}
          <button
            onClick={() => alert("Password reset functionality not implemented yet.")}
            style={{
              background: "none",
              border: "none",
              color: "#1976d2",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Reset here
          </button>
        </Typography>
      </Paper>
    </div>
  );
};

export default LoginPage;
