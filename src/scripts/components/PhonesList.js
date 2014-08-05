/** @jsx React.DOM */
var Phone = require("./Phone.js")

var PhonesList = React.createClass({
  render: function() {
    var phones = this.props.phones.map(function(phone, i){
      return <Phone phone={phone} key={i} />
    });


    return (
      <ul className="phones">
        {phones}
      </ul>
    )
  }
});

module.exports = PhonesList;
