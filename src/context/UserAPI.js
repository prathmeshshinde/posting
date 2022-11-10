import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase_config";
import { db } from "../firebase_config";

const UserAPI = createContext();

export function UserAPIProvider({ children }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  async function getUsername(userID) {
    try {
      const response = await db
        .collection("userName")
        .where("uid", "==", userID)
        .get();
      setUsername(response.docs[0].data().user);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!!user?.uid.length) {
      getUsername(user.uid);
    }
  }, [user]);

  return (
    <UserAPI.Provider value={{ user, signUp, logIn, logOut, username }}>
      {children}
    </UserAPI.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAPI);
}
