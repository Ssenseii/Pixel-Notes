import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form id="signout" className="signup" onSubmit={signup}>
      <input
        name="email"
        className="signup__email"
        value={email}
        type="email"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="false"
      />
      <input
        name="password"
        className="signup__password"
        value={password}
        type="password"
        placeholder="Passwword..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" className="signup__submit" value=" " />
    </form>
  );
};

export default Signup;
