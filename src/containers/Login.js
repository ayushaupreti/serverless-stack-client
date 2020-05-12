import React, { useState } from "react";
import { Form, FormGroup, FormFeedback, Input, Label } from "reactstrap";
import LoaderButton from "../components/LoaderButton";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Login.css";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  function validateForm() {
    return !emailError && password.length > 0;
  }

  const keyEmailPress = (e) => {
    var re = /^[^\W^_][\w]*[._-]?[\w]*[^\W^_][@][\w]+[^!@.][_-]?([.][a-zA-Z]{2,})+$/;
    setEmailError(!re.test(email) && email !== "");
  };

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <Label>Email</Label>
          <Input
            autoFocus
            type="email"
            value={email}
            invalid={emailError}
            onKeyUp={(e) => keyEmailPress(e)}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormFeedback invalid>Not a valid email.</FormFeedback>
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Log In
        </LoaderButton>
      </Form>
    </div>
  );
}
