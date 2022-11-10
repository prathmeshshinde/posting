import React, { useState, useEffect } from "react";
import { db } from "../firebase_config";

const People = () => {
  const [follow, setFollow] = useState(true);
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  function getPeople() {
    db.collection("userName").onSnapshot(function (querySnapshot) {
      setPeoples(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          user: doc.data().user,
        }))
      );
    });
    console.log(peoples);
  }

  const handleFollow = (pep) => {
    setFollow((prevState) => (prevState === pep.user ? "UnFollow" : "follow"));
  };

  return (
    <div className="border-2 w-1/5">
      {peoples.map((pep) => (
        <div
          key={pep.id}
          className="flex justify-between items-center my-4 mx-4"
        >
          <div className="flex">
            <div className=" m-auto">
              <img
                className="w-10 rounded-full p-1"
                alt="profile"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              />
            </div>

            <div className="p-2">
              <p className="text-sm font-medium">{pep.user}</p>
              <p className="text-sm"></p>
            </div>
          </div>
          <button
            onClick={() => handleFollow(pep)}
            className="border-2 py-0.5 px-3 rounded-2xl font-medium"
          >
            {follow}
          </button>
        </div>
      ))}

      {/* <div className="flex justify-between items-center my-4 mx-4">
        <div className="flex">
          <div className=" m-auto">
            <img
              className="w-10 rounded-full p-1"
              alt="profile"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
          </div>

          <div className="p-2">
            <p className="text-sm font-medium">Aj Shinde</p>
            <p className="text-sm">@ashinde</p>
          </div>
        </div>

        <button
          onClick={handleFollow}
          className="border-2 py-0.5 px-3 rounded-2xl font-medium"
        >
          {follow === true ? "Follow" : "Unfollow"}
        </button>
      </div> */}
    </div>
  );
};

export default People;
