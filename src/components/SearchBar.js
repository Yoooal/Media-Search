import React from 'react';
import './css/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_string: ''
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.search_string);
    this.setState({search_string: ''})
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-row">
            <div className="col-md-5">
                <div id="custom-search-input">
                    <div className="input-group">
                        <input
                          type="text"
                          className="form-control input-lg"
                          value={this.state.search_string}
                          onChange={(e) => this.setState({search_string: e.target.value})}
                          placeholder="Search here.."
                          />
                        <span className="input-group-btn">
                            <button className="btn btn-info btn-lg" type="submit">
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div id="custom-selecter">
                    <select onChange={(e) => this.props.onCategorySelect(e)} className="form-control">
                      <option value="images">Images</option>
                      <option value="videos">Videos</option>
                    </select>
                </div>
            </div>
          </div>
        </form>
      </div>

    );
  }
};

export default SearchBar;
