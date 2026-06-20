// import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../../Context/AuthContext";

// export default function AdminLoginPage() {
// //   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // login();
//     navigate("/admin");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded-2xl shadow w-[400px]">
//         <h1 className="text-3xl font-bold mb-8 text-center">
//           Admin Login
//         </h1>

//         <button
//           onClick={handleLogin}
//           className="w-full bg-rose-600 text-white py-4 rounded-xl"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(username, password);

    if (success) {
      navigate("/admin");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-[400px]"
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-rose-600 text-white py-3 rounded-lg">
          Login
        </button>

        <div className="text-center mt-6 text-gray-500">
          Username : admin
          <br />
          Password : 123
        </div>
      </form>
    </div>
  );
}