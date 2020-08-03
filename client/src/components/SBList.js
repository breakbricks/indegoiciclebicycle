import React, { useState, useEffect, useRef, Fragment } from "react";
import "../App.css";

export const SBList = (props) => (
  <div className="sList">
    <li key={props.key} align="left" onClick={props.onClick}>
      FROM: {props.from}
      <br></br>
      TO: {props.to}
      <br></br>
      DATE:{props.date}
      <br></br>
      TIME:{props.time}
      <br></br>
      {props.children}
    </li>
  </div>
);
