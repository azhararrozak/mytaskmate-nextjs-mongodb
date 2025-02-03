"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard</p>
        <h3>username: {session?.user?.fullname}</h3> {/* Display the username from the session */}
        <h3>email: {session?.user?.email}</h3>
        <button onClick={() => signOut()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
        </button>
    </div>
  )
}

export default DashboardPage