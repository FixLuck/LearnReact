import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePassChange,
    hasError: passwordHasError,
  } = useInput("", (value) => {
    hasMinLength(value, 6);
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValue.email) &&
    isNotEmpty(enteredValue.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleSubmit(e) {
    e.preventDefault(); //prevent default submit
    if (emailHasError || passwordHasError) {
      return;
    }
    
    setEnteredValue({
      email: "",
      password: "",
    });
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError ? "Please enter a valid email address" : null}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          id="password"
          onBlur={handlePasswordBlur}
          onChange={handlePassChange}
          value={passwordValue}
          error={passwordHasError ? "Please enter a valid password" : null}
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
