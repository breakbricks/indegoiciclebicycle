import React, { useState } from "react";
import { Add, Close, Bike, FormView } from "grommet-icons";

import {
  Box,
  Button,
  FormField,
  Grommet,
  Heading,
  Layer,
  Select,
  TextArea,
  TextInput,
} from "grommet";

const thema = {
  global: {
    colors: {
      brand: "#2d3e8b",
      text: { dark: "#f8f8f8", light: "#444444" },
    },
    font: {
      family: "Roboto Mono",
      size: "24px",
    },
  },
};

export const SBListModal = (props) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <Grommet theme={thema}>
      <Button
        secondary
        icon={<FormView />}
        size="small"
        label="info"
        onClick={onOpen}
      />
      {open && (
        <Layer
          position="right"
          full="vertical"
          modal
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box overflow="auto" width="medium" pad="medium">
            <Box flex={false} justify="between">
              <Button icon={<Close />} onClick={onClose} />
              <Heading level={2} margin="none"></Heading>
              <Box align="center">
                <h4>[ directions ]</h4>
                <ul>{props.children}</ul>
              </Box>
            </Box>
            <Box pad={{ vertical: "medium" }}></Box>
          </Box>
        </Layer>
      )}
    </Grommet>
  );
};
