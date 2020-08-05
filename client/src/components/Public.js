import React, { useState, useEffect, useRef, Fragment } from "react";
import { IDGHeader } from "./Header";
import { SidebarPublic } from "./Sidebar";
import { PublicMap } from "./PublicMap";

export const Public = () => {
  return (
    <div>
      <IDGHeader></IDGHeader>
      <SidebarPublic></SidebarPublic>
    </div>
  );
};
