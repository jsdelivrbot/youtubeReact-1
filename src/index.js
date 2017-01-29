import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './APIKey'; //file is gitignored
import SearchBar from './components/search_bar';

YTSearch({key: API_KEY, term: 'mozart'}, function(data){ //test the api with dummy search
  console.log(data);
});

//create a new component which should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
console.log(API_KEY);
//take component's generated html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
