import React, { useState, useEffect, useRef, Fragment } from "react";
import { IDGHeader } from "./Header";
import { SidebarPublic } from "./Sidebar";

export const Public = () => {
  return (
    <div>
      <IDGHeader></IDGHeader>
      <SidebarPublic></SidebarPublic>
      <div className="mapWrapper">
        <h1>map goes here</h1>
      </div>
    </div>
  );
};
