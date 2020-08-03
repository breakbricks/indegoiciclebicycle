import React, { useState } from "react";
import { Add, Close, Bike } from "grommet-icons";
import { PublicMap } from "./PublicMap";

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
      brand: "#7fbbca",
      text: { dark: "#f8f8f8", light: "#444444" },
    },
    font: {
      family: "Roboto Mono",
      size: "24px",
    },
  },
};

export const PublicModal = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <Grommet theme={thema}>
      <Button
        secondary
        size="small"
        label="find a ride"
        icon={<Bike />}
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
          <Box fill="vertical" overflow="auto" width="xlarge" pad="large">
            <Box flex={false} direction="row" justify="between">
              <Heading level={2} margin="none"></Heading>
              <Box align="center">
                <h4>all indego bike stations</h4>
                <p>[log in for more information]</p>
              </Box>
              <Button icon={<Close />} onClick={onClose} />
            </Box>
            <Box pad={{ vertical: "medium" }}>
              <PublicMap></PublicMap>
            </Box>
          </Box>
        </Layer>
      )}
    </Grommet>
  );
};
