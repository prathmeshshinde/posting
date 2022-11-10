import React from "react";
import Header from "./Header";
import Option from "./Option";
import People from "./People";
import { useUserAuth } from "../context/UserAPI";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logOut, username } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex-1">
      <Header />
      <div className="flex-1 mx-10">
        <div className="flex">
          <Option />
          <div className=" w-4/5  ">
            <div className="flex justify-center items-center text-center">
              <div className=" flex-col justify-center">
                <img
                  className=" w-44 rounded-full p-1"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
                <p className=" font-semibold text-lg">{username}</p>
                <p className=" font-medium text-gray-500">{user.email}</p>
                <button
                  className=" font-medium border-2 px-3 py-1 m-2 rounded-lg"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
          {/* <People /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
