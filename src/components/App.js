import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    images: [],
    videos: [],
    selectedVideo: null,
    category: 'images',
    showImages: false,
    showVideos: false
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  onSearchSubmit = (term) => {
    if (this.state.category === 'images') {
      axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term},
        headers: {
          Authorization: 'Client-ID fb3ac573f554a021016313b7bb13ceb917b71684329cb43ee955faca2567ffff'
        }
      }).then((response) => {
        this.setState({
          images: response.data.results,
          showImages: true,
          showVideos: false
        })
      }).catch((error) => {
        console.log(error);
      });
    }
    if (this.state.category === 'videos') {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyA4VyZAINQQr5j4zg1fVbEfomgwmgcjByo',
          q: term
        }
      }).then((response) => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
          showImages: false,
          showVideos: true
        })
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  onCategorySelect = (event) => {
    event.preventDefault();
    this.setState({category: event.target.value})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 logo text-center">
            <img alt="logo" src={require('../../public/img/mediaSearch.png')} />
          </div>
        </div>
        <div className="row">
            <div className="col-md-12 col-md-offset-2">
            <SearchBar
              onSearchSubmit={this.onSearchSubmit}
              onCategorySelect={this.onCategorySelect}
            />
          </div>
        </div>
        <div className="row media-content">
          <div className={this.state.showVideos ? '' : 'hide'}>
            <div className="col-md-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
          <div className={`col-md-12 ${this.state.showImages ? '' : 'hide'}`}>
            <ImageList images={this.state.images}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
