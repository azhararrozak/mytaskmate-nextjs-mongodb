"use client";
import { useState } from "react";
import Link from "next/link";
import Input from "./Input";
import Button from "./Button";

const RegisterForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering with:", { fullname, email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg space-y-4 m-4"
    >
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <Input
        type="text"
        placeholder="Full Name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
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
      <Button text="Register" />
      <p className="text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
