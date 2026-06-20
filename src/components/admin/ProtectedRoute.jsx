// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../Context/AuthContext";

// export default function ProtectedRoute({ children }) {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/admin/login" replace />;
//   }

//   return children;
// }

// export default function ProtectedRoute({ children }) {
//   return children;
// }

import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}