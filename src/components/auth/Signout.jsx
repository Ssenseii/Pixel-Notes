import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";

const Signout = () => {
  
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out...");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <button onClick={userSignout} className="auth__signout"></button>;
};

export default Signout;
