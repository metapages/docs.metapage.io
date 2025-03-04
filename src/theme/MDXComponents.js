
import React from 'react';
import ReactPlayer from 'react-player';

export default {
  AutoplayReactPlayer: ({ url }) => (
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
  ),
};