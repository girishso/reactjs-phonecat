/** @jsx React.DOM */
var PhonesList = require("./PhonesList.js")
var SearchForm = require("./SearchForm.js")

var PhoneCat = React.createClass({
  getInitialState: function() {
      return {
        filter_text: '',
        sort_by: 'age'
      }
  },

  handleSearch: function(filter_text, sort_by) {
    this.setState({
      filter_text: filter_text,
      sort_by: sort_by
    })
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-2">
          <SearchForm searchHandler={this.handleSearch} filter_text={this.state.filter_text} sort_by={this.state.sort_by} />
        </div>
        <div className="col-md-10">
          <PhonesList phones={this.props.phones} filter_text={this.state.filter_text} sort_by={this.state.sort_by} />
        </div>
      </div>
    )
  }
});

module.exports = PhoneCat;
