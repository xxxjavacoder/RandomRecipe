import { useState } from "react";
import {Button} from "../../components/button/Button.jsx";
import {Input} from "../../components/input/Input.jsx";
import {Select} from "../../components/select/Select.jsx";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("candidate");

    const handleRegister = () => {
        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        users.push({
            id: Date.now(),
            email,
            role,
        });

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert("Registered");
    };

    return (
        <>
            <h1>Register</h1>

            <Input
                className="mt-3 mb-3 w-300px"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <Select
                className="mt-3 mb-3 w-300px"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={[
                    {
                        value: "candidate",
                        label: "Candidate",
                    },
                    {
                        value: "recruiter",
                        label: "Recruiter",
                    }
                ]}
            />

            <Button
                className="btn-warning"
                onClick={handleRegister}
            >
                Register
            </Button>
        </>
    );
}