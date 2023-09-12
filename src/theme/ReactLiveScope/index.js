import React from "react";
import {
  MetaframeStandaloneComponent,
  MetapageGridLayoutFromMetapage,
  MetapageGridLayoutFromDefinition,
} from "@metapages/metapage-grid-react";
import {
  VersionsMetapage,
  MetapageDefinitionV3,
  Metapage,
} from "@metapages/metapage";

import Admonition from "@theme/Admonition";

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: "white",
      color: "black",
      border: "solid red",
      borderRadius: 20,
      padding: 10,
      cursor: "pointer",
      ...props.style,
    }}
  />
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  MetaframeStandaloneComponent,
  MetapageGridLayoutFromMetapage,
  MetapageGridLayoutFromDefinition,
  VersionsMetapage,
  MetapageDefinitionV3,
  Metapage,
  Admonition,
};

export default ReactLiveScope;
