import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div></div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoSrc}></iframe>
        </div>
        <div className="list-group">
          <div id="video-description" className="list-group-item">
            <h4 className="list-group-item-heading">{video.snippet.title}</h4>
            <p className="list-group-item-text">{video.snippet.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoDetail;
