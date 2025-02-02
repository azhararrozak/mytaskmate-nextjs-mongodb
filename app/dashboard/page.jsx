import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard</p>
        <h3>username: john</h3>
        <h3>email: john@gmail.com </h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
        </button>
    </div>
  )
}

export default DashboardPage