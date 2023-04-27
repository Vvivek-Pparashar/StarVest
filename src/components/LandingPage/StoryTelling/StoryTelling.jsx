import React from "react";
import "./StoryTelling.css";
import YouTube from "react-youtube";

const StoryTelling = () => {
  return (
    <div className="VideoPlayer_div">
      <div className="section-header">
        <h2>Story Telling</h2>
      </div>
      <YouTube videoId="Uwk86DUPywI" id="video" />
    </div>
  );
};

export default StoryTelling;
