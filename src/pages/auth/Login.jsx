import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (u) => u.email === email
        );

        if (!user) {
            alert("User not found");
            return;
        }

        login(user);

        if (user.role === "candidate") {
            navigate("/candidate");
        } else {
            navigate("/recruiter");
        }
    };

    return (
        <>
            <h1>Login</h1>

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleLogin}>
                Login
            </button>
        </>
    );
}