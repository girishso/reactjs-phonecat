/** @jsx React.DOM */
var PhoneCat = require("./PhoneCat.js")

var PhoneCatWrapper = React.createClass({
  render: function() {
    return (
      <PhoneCat />
    )
  }
});

module.exports = PhoneCatWrapper;
