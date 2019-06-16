import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  return (
    <div className="video-list list-group">
      {videos.map((video) => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />)}
    </div>
  );
};

export default VideoList;
