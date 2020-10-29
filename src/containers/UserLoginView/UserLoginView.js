import React from "react";
import { Switch, Route } from "react-router-dom";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function CenteredTabs() {
  return (
    <Switch>
      <Route path="/login">
        <SignInForm />
      </Route>
      <Route path="/register">
        <SignUpForm />
      </Route>
    </Switch>
  );
}
