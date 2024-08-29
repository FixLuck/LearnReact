import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function StateLogin() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !isEmail(enteredValue.email) && isNotEmpty(enteredValue.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleSubmit(e) {
    e.preventDefault(); //prevent default submit
    console.log("Summitted");
    console.log(enteredValue);
    setEnteredValue({
      email: "",
      password: "",
    });
  }

  function handleInputChange(name, e) {
    setEnteredValue((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
    setDidEdit((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  function handleInputBlur(name) {
    setDidEdit((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          name="email"
          type="email"
          id="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange("email", e)}
          value={enteredValue.email}
          error={emailIsInvalid ? "Please enter a valid email address" : null}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          id="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleInputChange("password", e)}
          value={enteredValue.password}
          error={passwordIsInvalid ? "Please enter a valid password" : null}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
