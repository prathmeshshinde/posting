import React, { useState } from "react";
import { db } from "../firebase_config";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAPI";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await signUp(email, password);
      console.log(res.user);
      await db.collection("userName").add({
        user: username,
        uid: res.user.uid,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className=" mt-32 w-96 h-96 bg-cyan-200 text-white rounded-xl">
        <div className="flex justify-center items-center my-4">
          <div>
            <div className=" h-5 mt-10 flex justify-center text-black font-medium">
              {error && <p className="text-sm">{error}</p>}
            </div>
            <form className="flex flex-col mt-7 w-60" onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                className="m-2 text-black border-1 px-2 rounded-md h-8 outline-none"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="m-2 text-black border-1 px-2 rounded-md h-8 outline-none"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="Username"
                className="m-2 text-black border-1 px-2 rounded-md h-8 outline-none"
                type="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <button
                className="bg-cyan-500 drop-shadow-2xl m-2 rounded-lg py-1.5"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <p className="p-2 bg-cyan-500 drop-shadow-2xl rounded-lg">Login</p>
          </Link>

          <p className="p-2 text-black">Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
