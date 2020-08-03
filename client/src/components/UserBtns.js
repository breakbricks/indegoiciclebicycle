import React, { useState } from "react";
import {
  Box,
  Image,
  Anchor,
  Button,
  Grommet,
  Text,
  Layer,
  Checkbox,
} from "grommet";

import {
  FormClose,
  Bike,
  Return,
  History,
  Network,
  Alert,
  Action,
} from "grommet-icons";

const thema = {
  global: {
    colors: {
      brand: "#2d3e8b",
    },
    font: {
      family: "Roboto Mono",
      size: "14px",
    },
  },
};

/*
export const LayerBtns = ({ checked: checkedProp, ...rest }) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const onChange = (event) => setChecked(event.target.checked);
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <CheckBox {...rest} checked={checked} onChange={onChange} />
      </Box>
    </Grommet>
  );
};*/

export const ToggleBikesBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="brand"
        icon={<Bike />}
        onClick={props.onClick}
        primary
      />
    </Grommet>
  );
};

export const ToggleDocksBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        icon={<Return />}
        onClick={props.onClick}
        secondary
      />
    </Grommet>
  );
};

export const ToggleEBikesBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="dark-1"
        onClick={props.onClick}
        icon={<Action color="accent-1" />}
        secondary
      />
    </Grommet>
  );
};

export const ToggleSRoutesBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        onClick={props.onClick}
        icon={<History />}
        primary
      />
    </Grommet>
  );
};

export const ToggleBLanesBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        icon={<Network />}
        onClick={props.onClick}
        primary
      />
    </Grommet>
  );
};

export const ToggleColBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        icon={<Alert color="accent-1" />}
        onClick={props.onClick}
        primary
      />
    </Grommet>
  );
};

export const DeleteBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        icon={<FormClose />}
        size="xsmall"
        color="brand"
        label="delete"
        onClick={props.onClick}
        primary
      />
    </Grommet>
  );
};

export const SaveBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        primary
        size="small"
        color="brand"
        label="save route"
        onClick={props.onClick}
        primary
      />
    </Grommet>
  );
};

export const RemoveDirBtn = (props) => {
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="brand"
        label="clear directions"
        onClick={props.onClick}
      />
    </Grommet>
  );
};
