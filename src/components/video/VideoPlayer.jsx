import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Rfd9Iq-iNgs"
        controls // adds play/pause, volume, fullscreen, and other controls
        playing={false} // autoplay off by default
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
