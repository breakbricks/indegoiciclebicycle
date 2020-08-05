import React, { useState } from "react";
import { InfoCarousel } from "./Carousel";

import {
  Grommet as GrommetIcon,
  Help,
  Reactjs,
  Node,
  Js,
  FormClose,
} from "grommet-icons";

import {
  Anchor,
  Box,
  Button,
  Footer,
  grommet,
  Grommet,
  Layer,
  Main,
  Text,
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

export const PublicFooter = () => {
  const [open, setOpen] = useState();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <Grommet theme={thema}>
      <Footer pad="medium">
        <Box align="left" direction="row" gap="xsmall">
          <Text alignSelf="center" color="brand" size="small">
            built with
          </Text>
          <Node color="plain" size="small" />
          <Js color="plain" size="small" />
          <Reactjs color="plain" size="small" />
          <GrommetIcon color="plain" size="small" />
        </Box>

        <Box align="right" direction="row" gap="xsmall">
          <Button
            plain={false}
            size="small"
            color="#eeede7"
            icon={<Help />}
            onClick={() => {
              onOpen();
            }}
          />

          {open && (
            <Layer onEsc={onClose} onClickOutside={onClose} pad="xsmall">
              <InfoCarousel></InfoCarousel>
            </Layer>
          )}
        </Box>
      </Footer>
    </Grommet>
  );
};
