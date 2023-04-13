import React, { useState } from "react";
import "./Login.css";
import DataService from "../../src/services/service";

export default function Login() {
  const [hash, setHash] = useState("");
  const [passwd, setPasswd] = useState("");
  const [type, setType] = useState("text");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (hash === "admin" && passwd === "") {
      setType("password");
      return;
    }
    DataService.logIn(hash, passwd)
      .then((response) => {
        if (hash === "admin") {
          window.location.href = "/admin";
        } else window.location.href = "/dashboard";
      })
      .catch((error) => {
        setErrorMsg("Something went wrong");
      });
  }

  return (
    <div className="login">
      <div className="App_header">
        <div className="leftHeader"></div>
        <h2 className="headline">Skill Selector</h2>
        <div className="rightHeader"></div>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="message">{errorMsg && <p>{errorMsg}</p>}</div>
        <label>
          {type === "text" ? (
            <input
              className="hashCode"
              placeholder="Enter your code"
              type="text"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
            />
          ) : (
            <input
              className="hashCode"
              placeholder="Enter your password"
              type="password"
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
            />
          )}
        </label>

        <br />
        <button className="loginbtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
