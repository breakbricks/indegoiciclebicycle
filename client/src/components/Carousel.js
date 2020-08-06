import React from "react";
import { Grommet, Box, Carousel, Image } from "grommet";
import geolocate from "../assets/demo/geolocate.png";
import routesaving from "../assets/demo/routesaving.png";
import savedroutes from "../assets/demo/savedroutes.png";
import togglebtlayers from "../assets/demo/togglebtlayers.png";
import bike1 from "../assets/demo/bike1.png";

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
            <Box pad="large">
              <h4>? what</h4>
              <br></br>
              <p>an app that allows users to: </p>

              <ul>
                <li>view indego bike share stations across philly </li>
              </ul>
              <Image fit="contain" src={geolocate} />
            </Box>
          </Box>

          <Box pad="large">
            <Box pad="large">
              <h4>? what</h4>
              <br></br>
              <ul>
                <li>
                  get directions to &amp; from stations/ origin/ destination
                </li>
              </ul>
              <Image fit="contain" src={routesaving} />
            </Box>
          </Box>

          <Box pad="large">
            <Box pad="large">
              <h4>? what</h4>
              <br></br>
              <ul>
                <li>
                  get directions to &amp; from stations/ origin/ destination{" "}
                </li>
              </ul>
              <br></br>
              <Image fit="contain" src={savedroutes} />
            </Box>
          </Box>
          <Box pad="large">
            <Box pad="large">
              <h4>? what</h4>
              <br></br>
              <ul>
                <li>toggle map layers on &amp; off </li>
              </ul>
              <br></br>

              <Image fit="contain" src={togglebtlayers} />
            </Box>
          </Box>

          <Box pad="large">
            <Box pad="large">
              <h4>? why</h4>
              <br></br>
              <br></br>
              <p>
                <li>
                  indego bike share is my go-to way to get around/ explore the
                  city - even more so in covid-19 times.
                </li>
                <br></br>
                <li>
                  the existing indego app is great, but i've found myself having
                  to switch between the indego app and google maps trying to
                  figure out:
                  <ul>
                    <li>where the indego stations are</li>
                    <li>directions from where i am to the station</li>
                    <li>directions between stations</li>
                    <li>directions from the station to my destination</li>
                  </ul>
                </li>

                <li>
                  this is an attempt to take select functions from each app and
                  combine them for easier trip planning
                </li>
                <br></br>
                <li>
                  users should be able to identify stations AND get directions
                  between stations/ origin/ destination.
                </li>
              </p>
              <br></br>
            </Box>
          </Box>

          <Box pad="large">
            <Box pad="large">
              <h4>? how</h4>
              <br></br>
              <br></br>
              <p>
                <strong>Tech:</strong>
                <li>Auth0</li>
                <li>Axios</li>
                <li>Express.js</li>
                <li>Grommet</li>
                <li>Mapbox GL JS + directions API plugin</li>
                <li>MongoDB + Mongoose + mLab</li>
                <li>Node.js</li>
                <li>React</li>
              </p>
              <br></br>
              <p>
                <strong>Datasets:</strong>
                <li>Indego live station location and status information</li>
                <li>PennDOT crash data for the years 2007-2017</li>
                <li>OpenDataPhilly Bike Network</li>
              </p>
              <Box height="small" width="small" alignSelf="end">
                <Image fit="contain" src={bike1} />
              </Box>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Grommet>
  );
};
