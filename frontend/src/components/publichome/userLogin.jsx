import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../../../css/publicHome/login.css";
import { Link } from "react-router";


export default function UserLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const Login = async () => {
    const res = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      console.log("Logged in");
    } else {
      console.log("Login failed");
    }
  }
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-card p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>
        <form method="post">
          {/* Email */}
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            name="name"
          />

          {/* Password */}
          <div className="position-relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              name="password"
            />

            <span
              className="password-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* Forgot */}
          <p className="text-end forgot">Forgot password?</p>

          {/* Login button */}
          <button className="btn login-btn w-100 mb-3" onClick={Login()}>Login</button>
        </form>
        {/* Register link */}
        <p className="text-center register-text">
          Don’t have an account yet?{" "}
          <Link className="register-link" as={Link} to="/signup">Register</Link>
        </p>
      </div>
    </div>

  );
}
