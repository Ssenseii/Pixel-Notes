import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Signout from "./components/auth/Signout";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <div className="app">
      {authUser ? (
        <>
          <Signout /> <Main />
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
