/** @jsx React.DOM */

var Phone = React.createClass({
  render: function() {
    var phone = this.props.phone;

    return (
      <li className="thumbnail phone-listing">
        <a href="#" className="thumb"><img src={phone.imageUrl} /></a>
        <a href="#">{phone.name}</a>
        <p>{phone.snippet}</p>
      </li>
    )
  }
});

module.exports = Phone;
