import React, { useState, useEffect } from "react";
import { db } from "../firebase_config";
import Header from "./Header";
import Option from "./Option";
import People from "./People";

const Bookmark = () => {
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    getBookmarkPosts();
  }, []);

  function getBookmarkPosts() {
    db.collection("postItems")
      .where("book", "==", true)
      .onSnapshot(function (querySnapshot) {
        setBookmark(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data().post,
            like: doc.data().like,
            book: doc.data().book,
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
    <div className="flex-1">
      <Header />
      <div className="flex-1  mx-10">
        <div className="flex">
          <Option />
          <div className=" w-4/5 p-3">
            {bookmark.map((mapping) => (
              <div key={mapping.id}>
                <div className="border-2 p-3 my-2">
                  <div className="flex items-center border-2 ">
                    <div>
                      <img
                        className="w-12 rounded-full p-1"
                        alt="profile"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      />
                    </div>

                    <div className="m-2">
                      <p>Prathmesh Shinde</p>
                      <p className="text-xs">Aug 26, 2022</p>
                    </div>
                  </div>
                  <div className="mt-2">{mapping.post}</div>
                  <div className="flex  items-center">
                    <div
                      style={{ color: "red" }}
                      className="flex items-center p-2 hover:bg-red-200 m-2 rounded"
                      onClick={() => handleHeart(mapping.id, mapping.like)}
                    >
                      {mapping.like === true ? (
                        <ion-icon size="small" name="heart"></ion-icon>
                      ) : (
                        <ion-icon size="small" name="heart-outline"></ion-icon>
                      )}
                    </div>
                    <div
                      style={{ color: "black" }}
                      className="flex items-center   p-2 hover:bg-red-200 rounded-md"
                      onClick={() => handleBookmark(mapping.id, mapping.book)}
                    >
                      {mapping.book === true ? (
                        <ion-icon size="small" name="bookmark"></ion-icon>
                      ) : (
                        <ion-icon
                          size="small"
                          name="bookmark-outline"
                        ></ion-icon>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <People /> */}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
