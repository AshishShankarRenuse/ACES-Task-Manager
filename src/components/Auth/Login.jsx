import React, { useState } from "react";

const Login= ({handleLogin}) =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }
    return(
      <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Log In</h2>
        
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
          <div className="mb-4">
            <label className="block text-white-800 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="w-full p-3 border bg-transparent border-gray-300 text-white rounded-lg focus:outline-none focus:border-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              className="w-full p-3 border bg-transparent border-gray-300 text-white rounded-lg focus:outline-none focus:border-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <a href="#" className="text-sm text-white-500 hover:text-black">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>

  );
}

export default Login;