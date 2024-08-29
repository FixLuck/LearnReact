import { useInsertionEffect } from "react";
import { useRef, useState } from "react";

export default function Login() {
  const email = useRef()
  const password = useRef()

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); //prevent default submit
    const enterEmail = email.current.value;
    const enterPassword = password.current.value;
    

    const emailIsValid = enterEmail.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return; // return here to prevent further execution
    }

    setEmailIsInvalid(false);
    console.log("Http Request sending...");
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            ref={email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
