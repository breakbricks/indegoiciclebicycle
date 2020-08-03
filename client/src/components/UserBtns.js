import React, { useState, useRef } from "react";
import {
  Box,
  Image,
  Anchor,
  Button,
  Grommet,
  Text,
  Layer,
  Checkbox,
  Drop,
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
  const [over, setOver] = useState();
  const ref = useRef();
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="brand"
        icon={<Bike />}
        onClick={props.onClick}
        primary
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onFocus={() => {}}
        onBlur={() => {}}
      />
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            margin="xsmall"
            pad="small"
            background="dark-3"
            round={{ size: "medium" }}
          >
            bikes available
          </Box>
        </Drop>
      )}
    </Grommet>
  );
};

export const ToggleDocksBtn = (props) => {
  const [over, setOver] = useState();
  const ref = useRef();
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        icon={<Return />}
        onClick={props.onClick}
        primary
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onFocus={() => {}}
        onBlur={() => {}}
      />
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            margin="xsmall"
            pad="small"
            background="dark-3"
            round={{ size: "medium" }}
          >
            docks available
          </Box>
        </Drop>
      )}
    </Grommet>
  );
};

export const ToggleEBikesBtn = (props) => {
  const [over, setOver] = useState();
  const ref = useRef();
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        onClick={props.onClick}
        icon={<Action color="accent-1" />}
        primary
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onFocus={() => {}}
        onBlur={() => {}}
      />
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            margin="xsmall"
            pad="small"
            background="dark-3"
            round={{ size: "medium" }}
          >
            e-bikes available
          </Box>
        </Drop>
      )}
    </Grommet>
  );
};

export const ToggleSRoutesBtn = (props) => {
  const [over, setOver] = useState();
  const ref = useRef();
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        onClick={props.onClick}
        icon={<History />}
        primary
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onFocus={() => {}}
        onBlur={() => {}}
      />
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            margin="xsmall"
            pad="small"
            background="dark-3"
            round={{ size: "medium" }}
          >
            saved routes
          </Box>
        </Drop>
      )}
    </Grommet>
  );
};

export const ToggleBLanesBtn = (props) => {
  const [over, setOver] = useState();
  const ref = useRef();
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        icon={<Network />}
        onClick={props.onClick}
        primary
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onFocus={() => {}}
        onBlur={() => {}}
      />
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            margin="xsmall"
            pad="small"
            background="dark-3"
            round={{ size: "medium" }}
          >
            bike lanes
          </Box>
        </Drop>
      )}
    </Grommet>
  );
};

export const ToggleColBtn = (props) => {
  const [over, setOver] = useState();
  const ref = useRef();
  return (
    <Grommet theme={thema}>
      <Button
        size="small"
        color="light-2"
        icon={<Alert color="accent-1" />}
        onClick={props.onClick}
        primary
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onFocus={() => {}}
        onBlur={() => {}}
      />
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            margin="xsmall"
            pad="small"
            background="dark-3"
            round={{ size: "medium" }}
          >
            collisions data
          </Box>
        </Drop>
      )}
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
