import React, { useState } from "react";

function Auth() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://54.180.175.139:9131/api/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            if (response.ok) {
                alert("회원가입 성공!");
            } else {
                alert("회원가입 실패");
                console.log("Response status:", response.status);
            }
        } catch (error) {
            alert("오류 발생: " + error.message);
        }
    };

    return (
        <div className="auth">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">계정만들기</button>
            </form>
        </div>
    );
}

export default Auth;