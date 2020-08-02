import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { grommet, Box, Button, Grommet } from "grommet";

const thema = {
  global: {
    colors: {
      brand: "#7fbbca",
    },
    font: {
      family: "Roboto Mono",
      size: "24px",
    },
  },
};

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Grommet theme={thema}>
      <Button
        primary
        label="log in"
        onClick={() => {
          console.log("clicked");
          loginWithRedirect();
        }}
      />
    </Grommet>
  );
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Grommet theme={thema}>
      <Button label="log out" onClick={() => logout()} />
    </Grommet>
  );
};

export const AuthBtns = (props) => {
  const { user } = useAuth0();

  return <div className="nav">{user ? <LogoutButton /> : <LoginButton />}</div>;
};
