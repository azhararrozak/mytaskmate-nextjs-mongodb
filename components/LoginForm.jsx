"use client";
import { useState } from "react";
import Link from "next/link";
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg space-y-4 m-4"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="Login" />
      <p className="text-center text-gray-600">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
