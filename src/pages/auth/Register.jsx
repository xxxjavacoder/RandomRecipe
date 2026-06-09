import { useState } from "react";

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

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >
                <option value="candidate">
                    Candidate
                </option>

                <option value="recruiter">
                    Recruiter
                </option>
            </select>

            <button onClick={handleRegister}>
                Register
            </button>
        </>
    );
}