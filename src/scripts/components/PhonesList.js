/** @jsx React.DOM */
var Phone = require("./Phone.js")

var PhonesList = React.createClass({

  render: function() {
    var props = this.props;

    var filtered = $.grep(this.props.phones, function(phone) {
      return phone.name.toLowerCase().indexOf(props.filter_text) > -1;
    });

    var sorted = filtered.sort(function(a, b) {
        if(props.sort_by === 'name')
          return a.name.localeCompare(b.name)
        else
          return a.age - b.age
      });

    var phones = sorted.map(function(phone, i){
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
