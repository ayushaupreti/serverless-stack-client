import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  UncontrolledTooltip,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Signup.css";

export default function Signup() {
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password === confirmedPassword
    );
  }

  function validateConfirmationForm() {
    return confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const newUser = await Auth.signUp({
        username: email,
        password: password,
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn(email, password);

      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function renderConfirmationForm() {
    return (
      <Form onSubmit={handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <Label>Confirmation Code</Label>
          <Input
            autoFocus
            type="tel"
            value={confirmationCode}
            onChange={(e) => {
              setConfirmationCode(e.target.value);
            }}
          />
          <FormText>Please check your email for the code.</FormText>
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateConfirmationForm()}
        >
          Verify
        </LoaderButton>
      </Form>
    );
  }

  function renderForm() {
    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Label>Password</Label>
          <Input
            className="float-left"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FontAwesomeIcon
            className="ml-2"
            id="UncontrolledTooltipExample"
            icon={faQuestionCircle}
          />
          <UncontrolledTooltip
            placement="right"
            target="UncontrolledTooltipExample"
          >
            Please input a password with at least 1 uppercase letter, 1
            lowercase letter, 1 number, 1 special character and a minimum length
            of 8.
          </UncontrolledTooltip>
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <Label className="mt-3">Confirm Password</Label>
          <Input
            type="password"
            value={confirmedPassword}
            onChange={(e) => {
              setConfirmedPassword(e.target.value);
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
          Sign Up
        </LoaderButton>
      </Form>
    );
  }

  return (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}
