import React, { useState } from 'react'
import { registerUser } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/Auth.css";

const Register = () => {
    const [name, setName] = useState("");
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
            const data = await registerUser({ name, email, password });
            if (!data || !data.token) {
                setLoading(false);
                setError(data.message || "Invalid Credentials");
                return;
            }
            localStorage.setItem("token", data.token);
            alert("Registration successfull");
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
                <h2>Register</h2>
                <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password"placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type='submit' disabled={loading}>{loading ? "Registering..." : "Register"}</button>
            </form>
            <p className="auth-switch">
                Already have an account?{" "}
                <Link to="/">Login here</Link>
            </p>
        </div>
    )
}

export default Register;