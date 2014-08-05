/** @jsx React.DOM */
var Phone = require("./Phone.js")

var PhonesList = React.createClass({
  render: function() {
    return (
      <ul className="phones">
        <Phone />
        <Phone />
      </ul>
    )
  }
});

module.exports = PhonesList;
