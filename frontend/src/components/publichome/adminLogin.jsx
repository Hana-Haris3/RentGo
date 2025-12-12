import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../../../css/publicHome/login.css";
import { Link } from "react-router";


export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);

     async function Login(e) {
            e.preventDefault();

            const response = await fetch("http://localhost:3000/admin/login", {
            method: "POST",
            credentials: "include",   // 🔥 required for cookies
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                name:"ff", 
                password:"nnm" 
            })
            });

            const data = await response.json();

            if (data.success) {
            navigate("/admin");   // 🔥 front-end redirect
            } else {
            setError(data.message || "Login failed");
            }
        }

    return (
        <div className="login-page d-flex justify-content-center align-items-center">
            <div className="login-card p-4 shadow">
                <h2 className="text-center mb-4">Login</h2>
                <form method="post">
                    {/* Email */}
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Name"
                        name='name'
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
              
            </div>
        </div>
    );
}
// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import "../../../css/publicHome/login.css";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   async function Login(e) {
//     e.preventDefault();

//     const response = await fetch("http://localhost:3000/admin/login", {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, password }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       navigate("/admin"); // front-end route
//       console.log("data added")
//     } else {
//       setError(data.message || "Login failed");
//     }
//   }

//   return (
//     <div className="login-page d-flex justify-content-center align-items-center">
//       <div className="login-card p-4 shadow">
//         <h2 className="text-center mb-4">Login</h2>

//         <form onSubmit={Login}>
//           <input
//             type="text"
//             className="form-control mb-3"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <div className="position-relative mb-2">
//             <input
//               type={showPassword ? "text" : "password"}
//               className="form-control"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <span
//               className="password-icon"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </span>
//           </div>

//           {error && <p className="text-danger">{error}</p>}

//           <button className="btn login-btn w-100 mb-3">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }
