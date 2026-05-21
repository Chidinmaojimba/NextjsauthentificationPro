// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Register() {
//   const router = useRouter();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (!fullName || !email || !password) {
//       setMessage("Please fill all fields");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const existingUser = users.find((user) => user.email === email);

//     if (existingUser) {
//       setMessage("User already exists");
//       return;
//     }

//     const newUser = {
//       id: Date.now(),
//       fullName,
//       email,
//       password,
//     };

//     users.push(newUser);

//     localStorage.setItem("users", JSON.stringify(users));

//     localStorage.setItem("currentUser", JSON.stringify(newUser));

//     setMessage("Registration successful");

//     setTimeout(() => {
//       router.push("/verification");
//     }, 1000);
//   };

 
// const handleGoogleRegister = () => {
//   const googleUser = {
//     fullName: "Google User",
//     email: "googleuser@gmail.com",
//     provider: "Google",
//   };

//   localStorage.setItem(
//     "currentUser",
//     JSON.stringify(googleUser)
//   );

//   router.push("/dashboard");
// };

// const handleAppleRegister = () => {
//   const appleUser = {
//     fullName: "Apple User",
//     email: "appleuser@gmail.com",
//     provider: "Apple",
//   };

//   localStorage.setItem(
//     "currentUser",
//     JSON.stringify(appleUser)
//   );

//   router.push("/dashboard");
// };



//   return (
//     <div className="container">
//       <div className="card">
//         <h1 className="title">Create Account</h1>

//         <p className="subtitle">
//           Join our secure platform and start your professional journey today.
//         </p>

//         <form onSubmit={handleRegister}>
//           <div className="input-group">
//             <label>Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//           </div>

//           <div className="input-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               placeholder="name@company.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="checkbox">
//             <input type="checkbox" required />
//             <p>I agree to the Terms and Privacy Policy</p>
//           </div>

//           <button className="btn">Sign Up</button>




// <div className="continue-container">
//   <div className="continue-line"></div>

//   <p className="continue-text">
//     OR REGISTER WITH
//   </p>

//   <div className="continue-line"></div>
// </div>



// <div className="social-buttons">
//   <button
//     type="button"
//     className="social-btn"
//     onClick={handleGoogleRegister}
//   >
//     <i className="fa-brands fa-google social-icon"></i>
//     Google
//   </button>

//   <button
//     type="button"
//     className="social-btn"
//     onClick={handleAppleRegister}
//   >
//     <i className="fa-brands fa-apple social-icon"></i>
//     Apple
//   </button>
// </div>






//           {message && (
//             <p style={{ marginTop: "15px", color: "red" }}>{message}</p>
//           )}
//         </form>

//         <p className="link-text">
//           Already have an account? <Link href="/login">Log In</Link>
//         </p>
//       </div>
//     </div>
//   );
// }















 "use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // setUsers(storedUsers);
  }, []);

  // REGISTER FUNCTION
  const handleRegister = (e) => {
    e.preventDefault();

    // CHECK EMPTY FIELDS
    if (!fullName || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    
    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      setMessage("User already exists");
      return;
    }

    
    const newUser = {
      id: crypto.randomUUID(),
      fullName,
      email,
      password,
    };

    
    const updatedUsers = [...users, newUser];

    
    setUsers(updatedUsers);

   
    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    
    localStorage.setItem(
      "currentUser",
      JSON.stringify(newUser)
    );

    setMessage("Registration successful");

    
    setTimeout(() => {
      router.push("/verification");
    }, 1000);
  };

 
  const handleGoogleRegister = () => {
    const googleUser = {
      id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
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
        {/* TITLE */}
        <h1 className="title">
          Create Account
        </h1>

        <p className="subtitle">
          Join our secure platform and start
          your professional journey today.
        </p>

       
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />
          </div>

         
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          
          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

         
          <div className="checkbox">
            <input type="checkbox" required />

            <p>
              I agree to the Terms and Privacy
              Policy
            </p>
          </div>

          
          <button className="btn">
            Sign Up
          </button>

         
          {message && (
            <p
              style={{
                marginTop: "15px",
                color: "red",
              }}
            >
              {message}
            </p>
          )}
        </form>

        
        <div className="continue-container">
          <div className="continue-line"></div>

          <p className="continue-text">
            OR REGISTER WITH
          </p>

          <div className="continue-line"></div>
        </div>

        
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

        
        <p className="link-text">
          Already have an account?{" "}
          <Link href="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}