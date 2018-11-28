import "./Detail.css";

import React from 'react';

export default class Detail extends React.Component {

  show () {
    const video = this.props.video;
    if (video) {
      const snippet = video.snippet;
      const src = `https://www.youtube.com/embed/${video.id.videoId}`;
      return (
        <div>
          <div className="ui embed">
            <iframe title="youtube" src={src} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="detail ui segment">
            <h4 className="ui header">{snippet.title}</h4>
            <p>{snippet.description}</p>
          </div>
        </div>
      );
    }
    return <div>Found nothing</div>
  }

  render () {
    return (
      <div>
        {this.show()}
      </div>
    );
  }
}

