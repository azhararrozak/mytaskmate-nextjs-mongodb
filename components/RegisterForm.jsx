"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "./Input";
import Button from "./Button";
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log("Registering with:", { fullname, email, password });

    const responseUserExist = await fetch("api/userExist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const { user } = await responseUserExist.json();

    if (user) {
      console.log("User already exists");
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);

      setFullname("");
      setEmail("");
      setPassword("");

      router.push('/login');
    } else {
      console.error("An error occurred");
    }
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
