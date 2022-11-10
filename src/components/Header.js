import React from "react";
import { useUserAuth } from "../context/UserAPI";

const Header = () => {
  const { user, username } = useUserAuth();

  return (
    <div className="bg-cyan-200	border-b-2 border-gray-200">
      <div className="flex justify-between  items-center  p-2">
        <div className="flex justify-center items-center">
          <div className="p-2">
            {/* <ion-icon size="large" name="mail-open-outline" /> */}
            <img
              alt="logo"
              src="https://cdn-icons-png.flaticon.com/512/646/646135.png"
              className="w-8"
            />
          </div>

          <h1 className="text-3xl font-bold">Posting</h1>
        </div>

        <div className="flex justify-center items-center ">
          <img
            className="w-12 rounded-full p-1"
            alt="profile"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <p className="p-1">Hello, {username}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
