import React, { useState, useEffect, useRef, Fragment } from "react";
import { IDGHeader } from "./Header";
import { SidebarUser } from "./Sidebar";

export const User = () => {
  return (
    <div>
      <IDGHeader></IDGHeader>
      <SidebarUser></SidebarUser>
      <div className="mapWrapper">
        <h1>map goes here</h1>
      </div>
    </div>
  );
};
