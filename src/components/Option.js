import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Option = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let home = false;
  let bookmark = false;
  let explore = false;
  let profile = false;

  let bg =
    "bg-cyan-400 flex px-5 items-center my-1 rounded-full cursor-pointer drop-shadow-2xl";

  let bgNone =
    "bg-none flex px-5 items-center my-1 rounded-full cursor-pointer";

  if (location.pathname === "/feed") {
    home = true;
  }
  if (location.pathname === "/bookmark") {
    bookmark = true;
  }
  if (location.pathname === "/explore") {
    explore = true;
  }
  if (location.pathname === "/profile") {
    profile = true;
  }

  return (
    <div className="w-1/5 h-full border-2">
      <div>
        <div className="flex flex-col text-lg ">
          <div className="flex flex-col items-start">
            <div
              onClick={() => navigate("/feed")}
              className={home ? bg : bgNone}
            >
              <ion-icon name="home" />
              <p className="px-4 py-3">Home</p>
            </div>

            <div
              onClick={() => navigate("/explore")}
              className={explore ? bg : bgNone}
            >
              <ion-icon name="rocket-sharp" />
              <p className="px-4 py-3">Explore</p>
            </div>

            <div
              onClick={() => navigate("/bookmark")}
              className={bookmark ? bg : bgNone}
            >
              <ion-icon name="bookmark" />
              <p className="px-4 py-3">Bookmarks</p>
            </div>

            <div
              onClick={() => navigate("/profile")}
              className={profile ? bg : bgNone}
            >
              <ion-icon name="person-circle" />
              <p className="px-4 py-3">Profile</p>
            </div>
          </div>

          {/* <button className="text-center rounded-2xl py-1 my-2 bg-cyan-100">
            Compose
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Option;
