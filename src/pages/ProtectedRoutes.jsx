import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children }) => {
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};
export default ProtectedRoutes;
