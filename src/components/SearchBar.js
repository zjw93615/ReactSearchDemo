import React from 'react'

class SearchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
    <div className="ui segment">
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input 
            type="text" 
            value={this.state.term}
            onChange={e => this.setState({term: e.target.value})}
          />
        </div>
      </form>
    </div>
      );
  }



  // static defaultProps() {
  //   return {
  //     onSubmit: term => console.log('You need to pass onSubmit props function'),
  //   };
  // }
}

export default SearchBar;