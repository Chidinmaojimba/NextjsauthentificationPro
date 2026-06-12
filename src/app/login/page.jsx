"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setMessage("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    setMessage("Login successful");

    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  const handleGoogleRegister = () => {
  const googleUser = {
    fullName: "Google User",
    email: "googleuser@gmail.com",
    provider: "Google",
  };

  localStorage.setItem(
    "currentUser",
    JSON.stringify(googleUser)
  );

  router.push("/dashboard");
};

const handleAppleRegister = () => {
  const appleUser = {
    fullName: "Apple User",
    email: "appleuser@gmail.com",
    provider: "Apple",
  };

  localStorage.setItem(
    "currentUser",
    JSON.stringify(appleUser)
  );

  router.push("/dashboard");
};

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Welcome Back</h1>

        <p className="subtitle">
          Access your professional dashboard to manage your activities.
        </p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn">Login to Account</button>



{/* CONTINUE WITH */}

<div className="continue-container">
  <div className="continue-line"></div>

  <p className="continue-text">
    OR CONTINUE WITH
  </p>

  <div className="continue-line"></div>
</div>

{/* SOCIAL BUTTONS */}

<div className="social-buttons">
  <button
    type="button"
    className="social-btn"
    onClick={handleGoogleRegister}
  >
    <i className="fa-brands fa-google social-icon"></i>
    Google
  </button>

  <button
    type="button"
    className="social-btn"
    onClick={handleAppleRegister}
  >
    <i className="fa-brands fa-apple social-icon"></i>
    Apple
  </button>
</div>





          {/* {message && (
             <p style={{ marginTop: "15px", color:  message === "green" }}>{message}</p>
          
          )} */}

         {
          message && (
            <p style={{marginTop: "15px", color: message === "Login successful" ? "green" : "red",}}> 
            {message}
            </p>
          )
         }

        </form>

        <p className="link-text">
          Dont have an account? <Link href="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
}