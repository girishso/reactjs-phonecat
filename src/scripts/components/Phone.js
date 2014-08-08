/** @jsx React.DOM */
Link = ReactRouter.Link;

var Phone = React.createClass({
  render: function() {
    var phone = this.props.phone;

    return (
      <li className="thumbnail phone-listing">
        <Link to="phone" phoneId={phone.id} className="thumb" >
          <img src={phone.imageUrl} />
        </Link>
        <Link to="phone" phoneId={phone.id} >
          {phone.name}
        </Link>
        <p>{phone.snippet}</p>
      </li>
    )
  }
});

module.exports = Phone;
