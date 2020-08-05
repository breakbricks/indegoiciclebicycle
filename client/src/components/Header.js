import React, { useState, useEffect, useRef, Fragment } from "react";
import { AuthBtns } from "./AuthBtns";
import {
  Anchor,
  Box,
  Button,
  Collapsible,
  Header,
  Heading,
  Grommet,
  Layer,
  Menu,
  Nav,
  ResponsiveContext,
} from "grommet";

import { Location, IceCream, Bike } from "grommet-icons";

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

export const IDGHeader = () => {
  return (
    <Grommet theme={thema}>
      <Header background="#2d3e8b" pad="small">
        <Box direction="row" align="center" gap="small">
          indego <Location size="medium" /> icicle <IceCream size="medium" />{" "}
          bicycle <Bike size="medium" />
        </Box>
        <AuthBtns></AuthBtns>
      </Header>
    </Grommet>
  );
};
