import React from 'react';
import SearchBar from './SearchBar';
import Detail from './Detail';
import youtube from '../apis/youtube-api';
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount () {
    this.search('nasa');
  }

  search (input) {
    youtube.get('/search', {
        params:
          {
            q: input
          }
      }
    ).then(response => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        })
      }
    );
  }

  onVideoClick = (video) => {
    console.log("from onVideoClick", video);
    this.setState({ selectedVideo: video });
  }

  render () {
    return <div className="ui container">
      <SearchBar
        onSubmit={(e) => this.search(e)}
      />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <Detail video={this.state.selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick}/>
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;