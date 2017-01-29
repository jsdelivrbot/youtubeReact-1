import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './APIKey'; //file is gitignored
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';



class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: []}

    YTSearch({key: API_KEY, term: 'mozart'}, (videos) => { //set an initial state with a search
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
