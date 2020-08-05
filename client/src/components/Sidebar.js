import React, { useState, useEffect, useRef, Fragment } from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { PublicModal } from "./PublicModal";
import { RideButton } from "./AuthBtns";
import { PublicFooter } from "./Footer";

import hero from "../assets/bike3.png";

import {
  Avatar,
  Button,
  Box,
  Drop,
  grommet,
  Grommet,
  Nav,
  Stack,
  Sidebar,
  Grid,
} from "grommet";

import {
  Bike,
  History,
  List,
  Location,
  LocationPin,
  Map,
  Apps,
  Github,
  DocumentStore,
} from "grommet-icons";

const thema = {
  global: {
    colors: {
      brand: "#eeede7",
    },
    font: {
      family: "Roboto Mono",
      size: "24px",
    },
  },
};

export const SidebarUser = (props) => {
  return (
    <div className="sidebar">
      <div className="sb1">
        <Profile></Profile>
      </div>
      <div className="sb2">{props.children}</div>
    </div>
  );
};

export const SidebarPublic = () => {
  return (
    <div>
      <div className="psb">
        <img className="tdfimg" src={hero}></img>
        <br></br>
        <div className="ridebtn">
          <br></br>
          <h4>let's go places</h4>
          <br></br>
          <RideButton></RideButton>
          <br></br>
          <PublicModal></PublicModal>
          <br></br>
        </div>
      </div>
      <div className="footer">
        <PublicFooter></PublicFooter>
      </div>
    </div>
  );
};

export const iconsMap = (color) => [
  <Bike
    onClick={() =>
      window.open("https://www.rideindego.com/become-a-member/", "_blank")
    }
    color={color}
  />,
  <Apps
    onClick={() =>
      window.open("https://www.rideindego.com/get-the-indego-app/", "_blank")
    }
    color={color}
  />,
  <DocumentStore
    onClick={() =>
      window.open("https://www.rideindego.com/about/data/", "_blank")
    }
    color={color}
  />,
  <Github
    onClick={() =>
      window.open(
        "https://github.com/breakbricks/indegoiciclebicycle",
        "_blank"
      )
    }
    color={color}
  />,
];
export const SidebarButton = ({ iconName, index }) => {
  const [over, setOver] = useState();
  const tooltipColor = { color: "#c8c700", opacity: 0.9 };

  const ref = useRef();

  return (
    <Box fill="horizontal">
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onFocus={() => setOver(false)}
        onBlur={() => setOver(false)}
        hoverIndicator={tooltipColor}
        plain
      >
        {({ hover }) => (
          <Box pad={{ vertical: "small" }} align="center">
            {iconsMap(hover ? "white" : "grey")[index]}
          </Box>
        )}
      </Button>
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            animation="slideRight"
            margin="xsmall"
            pad="small"
            background={tooltipColor}
            round={{ size: "medium", corner: "right" }}
          >
            {iconName}
          </Box>
        </Drop>
      )}
    </Box>
  );
};

export const TooltipsSidebar = (props) => (
  <Grommet theme={thema} full>
    <Box direction="row" height={{ min: "100%" }}>
      <Sidebar
        overflow="auto"
        background="brand"
        header={props.children}
        pad="none"
      >
        <Nav>
          {["Buy a Pass", "Download Mobile App", "Data", "Docs"].map(
            (iconName, index) => (
              <SidebarButton key={iconName} iconName={iconName} index={index} />
            )
          )}
        </Nav>
      </Sidebar>
    </Box>
  </Grommet>
);

export const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [over, setOver] = useState();
  const ref = useRef();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "ecn2318.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  return (
    isAuthenticated && (
      <TooltipsSidebar>
        <Box>
          <Button
            ref={ref}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            <Avatar
              border={{ color: "white", size: "small" }}
              margin="small"
              src={user.picture}
              alt={user.name}
            />
          </Button>

          {ref.current && over && (
            <Drop align={{ left: "right" }} target={ref.current} plain>
              <Box
                margin="xsmall"
                pad="small"
                background="light-2"
                round={{ size: "medium" }}
              >
                <p>hello, {user.name}!</p>
              </Box>
            </Drop>
          )}
        </Box>
      </TooltipsSidebar>
    )
  );
};
