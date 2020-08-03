import React, { useState, useEffect, useRef, Fragment } from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { PublicModal } from "./PublicModal";

import hero from "../assets/shiny-happy-people.png";

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
  Indicator,
  Navigate,
  AddCircle,
  Add,
  Layer,
  Alert,
  Apps,
  Clear,
  Close,
  Directions,
  FormLocation,
  Help,
  History,
  List,
  Location,
  LocationPin,
  Map,
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
        <img src={hero}></img>
        <h1>
          ride to live
          <br></br>
          live to ride
        </h1>
        <PublicModal></PublicModal>
      </div>
    </div>
  );
};

export const iconsMap = (color) => [
  <Map color={color} />,
  <Bike color={color} />,
  <Location color={color} />,
  <History color={color} />,
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
          {["Indego Bike Stations", "Bike Lanes", "Data", "Saved Routes"].map(
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
          <Avatar
            border={{ color: "white", size: "small" }}
            margin="small"
            src={user.picture}
            alt={user.name}
          />
        </Box>
      </TooltipsSidebar>
    )
  );
};
