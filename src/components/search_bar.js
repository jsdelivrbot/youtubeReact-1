import React, {Component} from 'react';
import API_KEY from '../APIKey'; //file is gitignored


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};

  }
  render() {
    const { videoSearch } = this.props;
    return (
      <div className="search-bar">
        <form onSubmit={(e) => {e.preventDefault(); videoSearch(this.state.term)}}>
          <input
            value={this.state.term}
            onChange={e => this.setState({term: e.target.value})}
          />
        </form>

      </div>
    );
  }


}

export default SearchBar;
