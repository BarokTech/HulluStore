/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { userSchema } from "../validation/loginFormValidation";
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
      console.log(user.currentUser);
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
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
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
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <NavLink to="/" className="btn btn-link ms-2">
          Forgot Password?
        </NavLink>
      </form>

      {user.currentUser.name && (
        <h3 className="mt-4">
          {user.currentUser.name.firstname} is logged in.
        </h3>
      )}
    </div>
  );
}

export default Login;
