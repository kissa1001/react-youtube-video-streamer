import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCj2H5wPLcLtbyupgI7Q3ptwLYr76IBGek';

const App = () => {
  return <div>
      <SearchBar />
    </div>;
}

ReactDOM.render(<App />, document.getElementById("container"));
