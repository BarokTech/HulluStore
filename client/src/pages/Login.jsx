/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as yup from "yup";
import { userSchema } from "../validation/loginFormValidation";
import { async } from "jshint/src/prod-params";
import { userData } from "../data/userData";
import { login } from "../helpers/login";
import { UserContext } from "../App";
import { NavLink } from "react-router-dom";

function Login() {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const user = useContext(UserContext);
  // const [currentUser, setCurrentUser] = useState({ name: "" });
  const [pwd, setPwd] = useState("");
  const [pwdErr, setPwdErr] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/users")
  //     .then((res) => {
  //       setUsers(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    const isValid = await userSchema.isValid(formData);
    if (isValid) {
      const currentUserRes = login(formData, userData);
      console.log(user.currentUser)
      // eslint-disable-next-line no-undef
      user.setCurrentUser(currentUserRes);
      console.log(user.currentUser.name.firstname, "is logged in.");
    }

    console.log(isValid);
  };

  const handleChange = (e) => {
    const accountChanged = { ...account };
    accountChanged[e.target.name] = e.target.value;
    setAccount(accountChanged);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          value={account.email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We will never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          value={account.password}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        <NavLink to="/" /> Login
      </button>

      {user.currentUser.name && <h3>{user.currentUser.name.firstname} is logged in.</h3>}
    </form>
  );
}

export default Login;
