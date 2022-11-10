import React, { useState } from "react";
import { db } from "../firebase_config";
import Header from "./Header";
import Option from "./Option";
import People from "./People";
import Posts from "./Posts";
import { useUserAuth } from "../context/UserAPI";

const Feed = () => {
  const [post, setPost] = useState("");
  const { user, username } = useUserAuth();
  const [date, setDate] = useState("");

  const handle = () => {
    post.trim().length !== 0
      ? db.collection("postItems").add({
          like: false,
          book: false,
          post: post,
          userId: username,
          date: date,
        })
      : alert("Enter the post");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handle();
    setPost("");
  };

  const handleChange = (e) => {
    setPost(e.target.value);
    var options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const current = new Date().toLocaleString("en-US", options);
    setDate(current);
  };

  return (
    <div className="flex-1">
      <Header />
      <div className="flex-1 mx-10">
        <div className=" flex">
          <Option />

          <div className=" w-4/5 ">
            <div className=" flex m-3 justify-center  ">
              <form className="">
                <input
                  type="text"
                  className="border-4 w-96 mx-2 px-2 rounded-md h-10 "
                  value={post}
                  onChange={handleChange}
                  placeholder="Write a Post"
                />
                <button
                  type="submit"
                  className="bg-cyan-400 drop-shadow-2xl px-10 h-10 mx-2 rounded-md text-lg font-medium"
                  onClick={handleSubmit}
                >
                  Post
                </button>
              </form>
            </div>
            <div className="p-2">
              <Posts />
            </div>
          </div>

          {/* <People /> */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
