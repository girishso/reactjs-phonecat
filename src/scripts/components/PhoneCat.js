/** @jsx React.DOM */
var PhonesList = require("./PhonesList.js")
var SearchForm = require("./SearchForm.js")

var PhoneCat = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-2">
          <SearchForm />
        </div>
        <div className="col-md-10">
          <PhonesList phones={this.props.phones} />
        </div>
      </div>
    )
  }
});

module.exports = PhoneCat;
