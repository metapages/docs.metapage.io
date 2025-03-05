import React, { useState, useCallback } from 'react';
import { MetaframeStandaloneComponent } from "@metapages/metapage-react";
import { MetaframeIframe } from "@metapages/metapage-react/components";

import {
  Metapage,
} from '@metapages/metapage';
import {
  MetapageGridLayoutFromDefinition,
  MetapageGridLayoutFromMetapage,
  MetaframeWrapperEditoverlay,
} from '@metapages/metapage-grid-react';
import Admonition from '@theme/Admonition';

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
  useState,
  useCallback,
  ...React,
  ButtonExample,
  MetaframeIframe,
  MetaframeStandaloneComponent,
  MetapageGridLayoutFromMetapage,
  MetapageGridLayoutFromDefinition,
  MetaframeWrapperEditoverlay,
  Metapage,
  Admonition,
};

export default ReactLiveScope;
