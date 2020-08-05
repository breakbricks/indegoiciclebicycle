import React from "react";
import { Grommet, Box, Carousel } from "grommet";

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

export const InfoCarousel = ({ initialChild, ...props }) => {
  return (
    <Grommet theme={thema}>
      <Box margin="small" height="large" width="large" pad="small">
        <Carousel fill initialChild={initialChild} {...props}>
          <Box pad="large">
            <p>what</p>
          </Box>
          <Box pad="large">
            <p>why</p>
          </Box>
          <Box pad="large">
            <p>how</p>
          </Box>
        </Carousel>
      </Box>
    </Grommet>
  );
};
