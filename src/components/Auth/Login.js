import React, { useState } from 'react'
import { loginUser } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/Auth.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const data = await loginUser({ email, password });
            if (!data || !data.token) {
                setLoading(false);
                setError(data.message || "Invalid Credentials");
                return;
            }
            localStorage.setItem("token", data.token);
            alert("Login successfull");
            navigate("/dashboard");
        } catch (error) {
            setError("Something went wrong");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className='auth-container'>
            <form onSubmit={handleSubmit} className='auth-form'>
                <h2>Login</h2>
                <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password"placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type='submit' disabled={loading}>{loading ? "Processing..." : "Login"}</button>
            </form>
            <p className="auth-switch">
                Don’t have an account?{" "}
                <Link to="/register">Register here</Link>
            </p>
        </div>
    )
}

export default Login;