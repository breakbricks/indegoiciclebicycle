import React, { useState, useEffect, useRef, Fragment } from "react";
import "../App.css";

export const SBList = (props) => (
  <li key={props.key} align="left" onClick={props.onClick}>
    <p>
      <bold>FROM:</bold>
      {props.from}
    </p>
    <p>
      <bold>TO:</bold>
      {props.to}
    </p>
    <p>
      <bold>DATE:</bold>
      {props.date}
    </p>
    <p>
      <bold>TIME:</bold>
      {props.time}
    </p>
    <br></br>
    {props.children}
  </li>
);
