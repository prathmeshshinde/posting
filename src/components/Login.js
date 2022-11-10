import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAPI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/feed");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="mt-32 w-96 h-96 bg-cyan-200 text-white rounded-xl">
        <div className="flex justify-center my-4">
          <div>
            <div className=" h-5 mt-10 flex text-black font-medium   justify-center">
              {error && <p className="text-sm">{error}</p>}
            </div>
            <form className="flex flex-col mt-7 w-60" onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="m-2 text-black border-1 px-2 rounded-md h-8 outline-none"
                type="email"
              />
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="m-2 text-black border-1 px-2 rounded-md h-8 outline-none"
                type="password"
              />
              <button
                className="bg-cyan-500 drop-shadow-2xl m-2 rounded-lg py-1.5"
                type="submit"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center">
          <p className=" p-2 text-black ">Login</p>

          <Link to="/signup">
            <p className="p-2 bg-cyan-500 drop-shadow-2xl rounded-lg">
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
