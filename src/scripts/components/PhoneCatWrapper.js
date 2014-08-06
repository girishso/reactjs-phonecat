/** @jsx React.DOM */
var PhoneCat = require("./PhoneCat.js")

var PhoneCatWrapper = React.createClass({
  getInitialState: function() {
      return {
        phones: []
      }
  },

  componentDidMount: function() {
    $.getJSON('phones/phones.json', (function(data) {
      this.setState({phones: data});
    }).bind(this));

  },

  render: function() {
    return (
      <PhoneCat phones={this.state.phones} />
    )
  }
});

module.exports = PhoneCatWrapper;
