import './VideoItem.css';
import React from 'react';

const VideoItem = (props) => {
  console.log(props.video);
  const snippet = props.video.snippet;
  return (
    <div className="item video-item" onClick={() => props.onVideoClick(props.video)}>
      <img className="ui image" src={snippet.thumbnails.default.url} alt={snippet.title}/>
      <div className="content">
        <div className="header">
          {snippet.title}
        </div>
      </div>
    </div>
  )
}

export default VideoItem;
