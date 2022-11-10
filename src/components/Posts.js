import React, { useEffect, useState } from "react";
import { db } from "../firebase_config";

const Posts = () => {
  const [posting, setPosting] = useState([]);
  const [usernameId, setUsernameId] = useState([]);

  useEffect(() => {
    getPosts();
    getUsername();
  }, []);

  function getPosts() {
    db.collection("postItems").onSnapshot(function (querySnapshot) {
      setPosting(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data().post,
          like: doc.data().like,
          book: doc.data().book,
          user: doc.data().userId,
          date: doc.data().date,
        }))
      );
    });
  }

  function getUsername() {
    db.collection("userName").onSnapshot(function (querySnapshot) {
      setUsernameId(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          username: doc.data().user,
        }))
      );
    });
  }

  const handleHeart = (id, like) => {
    db.collection("postItems").doc(id).update({
      like: !like,
    });
  };

  const handleBookmark = (id, book) => {
    db.collection("postItems").doc(id).update({
      book: !book,
    });
  };

  return (
    <div>
      {posting.map((post) => (
        <div key={post.id}>
          <div className=" border-2 p-3 m-2">
            <div className="flex items-center border-2 ">
              <div>
                <img
                  className="w-12 rounded-full p-1"
                  alt="profile"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
              </div>

              <div className="m-2">
                <p>{post.user}</p>
                <p className="text-xs">{post.date} </p>
              </div>
            </div>
            <div className="mt-2 px-5">{post.post}</div>
            <div className="flex  items-center">
              <div
                style={{ color: "red" }}
                className="flex items-center p-2 hover:bg-red-200 m-2 rounded"
                onClick={() => handleHeart(post.id, post.like)}
              >
                {post.like === true ? (
                  <ion-icon size="small" name="heart"></ion-icon>
                ) : (
                  <ion-icon size="small" name="heart-outline"></ion-icon>
                )}
              </div>
              <div
                style={{ color: "black" }}
                className="flex items-center   p-2 hover:bg-red-200 rounded-md"
                onClick={() => handleBookmark(post.id, post.book)}
              >
                {post.book === true ? (
                  <ion-icon size="small" name="bookmark"></ion-icon>
                ) : (
                  <ion-icon size="small" name="bookmark-outline"></ion-icon>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
