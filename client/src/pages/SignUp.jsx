import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
      }
      setLoading(false);
      setError(null);
      console.log(data);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-slate-900 text-3xl text-center font-bold mt-5">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4  mx-auto mt-5"
      >
        <input
          className="p-3 border rounded-lg"
          type="text"
          id="username"
          placeholder="username"
          onChange={handleChange}
        />

        <input
          className="p-3 border rounded-lg"
          type="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className="p-3 border rounded-lg"
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="p-3 bg-slate-800 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "loading..." : "SignUp"}
        </button>
      </form>
      <div className="flex mt-3 gap-2">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </Link>
      </div>
    </div>
  );
}
