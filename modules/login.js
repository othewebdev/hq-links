import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <h1>HQ Links Admin Console</h1>
      </div>
      <div>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <a href="/portal">
          <button>Sign In</button>
        </a>
      </div>
    </div>
  );
};

export default Login;
