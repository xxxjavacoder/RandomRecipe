import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

import {Button} from "../../components/button/Button.jsx";
import {Input} from "../../components/input/Input.jsx";

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

            <Input
                type="email"
                placeholder="Email"
                className="mt-3 mb-3 w-300px"
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button
                className="btn-success"
                onClick={handleLogin}
            >
                Login
            </Button>
        </>
    );
}