import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ")

  function signin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        setError(' ')
      })
      .catch((err) => {console.log(err); setError("signinError")});
  }

  return (
    <form id="signin" className="signin" onSubmit={signin}>
      <input
        name="email"
        className={`signin__email ${error}`}
        value={email}
        type="email"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="true"
      />
      <input
        name="password"
        className={`signin__password ${error}`}
        value={password}
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <input className="signin__submit" type="submit" value=" " />
    </form>
  );
};

export default Signin;
