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
        color="light-2"
        label="available bikes"
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
        size="small"
        color="brand"
        label="delete route"
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
