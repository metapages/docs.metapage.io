import React from "react";

export const PaddedWidth = (props:any) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div style={{ minWidth: "50px" }}></div>
    <div style={{ maxWidth: "800px" }}>{props.children}</div>
    <div style={{ minWidth: "50px" }}></div>
  </div>
);
