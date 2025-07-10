
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      login(data);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input placeholder="Name" className="input" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" className="input" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="input" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="btn mt-4">Register</button>
    </form>
  );
};

export default Signup;
