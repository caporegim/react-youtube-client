import React from 'react';

class SearchBar extends React.Component {
  state = { input: '' };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  }

  render () {
    return <div className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => this.onSubmit(e)}>
        <div className="field">
          <label>Search here:</label>
          <input value={this.state.input} type="text" onChange={e => this.setState({ input: e.target.value })}/>
        </div>
      </form>
    </div>;
  }
}

export default SearchBar;