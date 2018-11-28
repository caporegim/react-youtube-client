import React from 'react';
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  showItems () {
    console.log('from videolist', this.props.videos);
    if (this.props.videos) {
      return this.props.videos
        // .filter((video, index) => index > 0)
        .map(video =>
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoClick={this.props.onVideoClick}
          />);
    }
    return '';
  }

  render () {
    return (
      <div className="ui relaxed divided list">
        {this.showItems()}
      </div>
    );
  }
}

export default VideoList;