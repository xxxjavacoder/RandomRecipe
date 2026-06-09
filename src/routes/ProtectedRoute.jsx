import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export const ProtectedRoute = ({children, role}) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (user.role !== role) {
        return <Navigate to="/" />;
    }

    return children;
}