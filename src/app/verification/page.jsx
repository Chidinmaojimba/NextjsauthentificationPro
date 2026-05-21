"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Verify() {
  const router = useRouter();

  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleVerify = () => {
    const joinedCode = code.join("");

    if (joinedCode.length !== 4) {
      alert("Enter complete code");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="main-icon">
        <div className="icon"><i className="fa-solid fa-envelope-circle-check email-icon"></i></div>
        </div>

        <h1 className="title">Verify Your Email</h1>

        <p className="subtitle">
          Weve sent a 4-digit verification code.
        </p>

        <div className="code-container">
          {code.map((item, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="code-input"
              value={item}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>

        <button className="btn" onClick={handleVerify}>
          Verify
        </button>

        <p className="link-text">
          Didnt receive code? <Link href="/login">Resend code</Link>
        </p>
      </div>
    </div>
  );
}