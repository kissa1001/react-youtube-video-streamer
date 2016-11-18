import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCj2H5wPLcLtbyupgI7Q3ptwLYr76IBGek';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
             videos: [],
             selectedVideo: null
         };

        YTSearch({key: API_KEY, term: 'javascript'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
                    videos = { this.state.videos } />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("container"));
