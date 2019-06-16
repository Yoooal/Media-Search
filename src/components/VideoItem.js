import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  return (
      <a onClick={() => onVideoSelect(video)} className="list-group-item video-item">
        <img className="img-responsive" alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <h4 className="list-group-item-heading">{video.snippet.title}</h4>
      </a>
  )
}

export default VideoItem;
