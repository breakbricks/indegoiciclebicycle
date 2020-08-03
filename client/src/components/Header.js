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
          indego icicle bicycle
        </Box>
        <AuthBtns></AuthBtns>
      </Header>
    </Grommet>
  );
};
