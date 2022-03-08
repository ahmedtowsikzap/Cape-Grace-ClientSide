import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const auth = getAuth();

  //sign in
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //register
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {});
        setUser(userCredential.user);
        saveUserToDB(name, email);
        navigate("/");
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  // observe the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAdminLoading(true);
        fetch(`https://fierce-refuge-49185.herokuapp.com/users/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setAdmin(data.admin))
          .finally(() => setAdminLoading(false));
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);
  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  const saveUserToDB = (name, email) => {
    const user = { name, email };
    fetch("https://fierce-refuge-49185.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
    admin,
    adminLoading,
  };
};

export default useFirebase;