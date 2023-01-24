import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.accessToken, "====> sucessfull Signup");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <div className="container my-5 center">
        <div className="row text-center">
          <div className="col-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  onChange={handlePass}
                  value={password}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleConfirmPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  onChange={handleConfirmPass}
                  value={confirmPass}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                ></input>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
