import React, { useEffect, useState } from "react";
import Header from "./Header";
import Option from "./Option";
import People from "./People";
import Posts from "./Posts";
import { db } from "../firebase_config";

const Explore = () => {
  return (
    <div className="flex-1">
      <Header />
      <div className="flex-1 mx-10">
        <div className="flex">
          <Option />
          <div className=" w-4/5 ">
            <Posts />
          </div>
          {/* <People /> */}
        </div>
      </div>
    </div>
  );
};

export default Explore;
