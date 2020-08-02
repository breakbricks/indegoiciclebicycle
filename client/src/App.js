import React from "react";
import { User } from "./components/User";
import { Public } from "./components/Public";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

export const App = () => {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated ? <User></User> : <Public></Public>}</div>;
};
