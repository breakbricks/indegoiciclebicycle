import React, { useState, useEffect, useRef, Fragment } from "react";
import { IDGHeader } from "./Header";

export const Public = () => {
  return (
    <Fragment>
      <IDGHeader></IDGHeader>
      <div className="mapWrapper">
        <h1>map goes here</h1>
      </div>
    </Fragment>
  );
};
