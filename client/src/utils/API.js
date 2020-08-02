import axios from "axios";

export default {
  // orCoords - array? [-122.42, 37.78]
  searchRouteDir: function (orCoords, deCoords) {
    return axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${orCoords};${deCoords}?geometries=geojson&steps=true&access_token=${process.env.REACT_APP_MAPBOX_KEY}`
    );
  },
  // save route to database with user_id
  saveRoute: function (data) {
    return axios.post("/api/idg/", data);
  },
  // get all saved routes from database under user_id
  // display list of routes and info on sidebar, on click - display on map
  //post to /api/idg/getroutes along with user_id(email)
  getAllRoutes: function (data) {
    return axios.post("/api/idg/getroutes/", data);
  },
  // delete route from database under user_id
  deleteRoute: function (id) {
    return axios.delete("/api/idg/getroutes/" + id);
  },
};
