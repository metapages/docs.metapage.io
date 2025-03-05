// src/theme/MDXComponents.js
import MDXComponents from '@theme-original/MDXComponents';

import React from 'react';
import ReactPlayer from 'react-player';

const AutoplayReactPlayer = ({ url }) => (
  <div className="video-container">
    <ReactPlayer
      url={url}
      width="100%"
      height="100%"
      playing
      muted
      loop
      controls={false}
    />
  </div>
)

export default {
  // Re-export all original components
  ...MDXComponents,
  AutoplayReactPlayer: AutoplayReactPlayer,
};