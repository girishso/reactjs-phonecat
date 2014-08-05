/** @jsx React.DOM */

var PhoneCatWrapper = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-2">
          Search:
          <input type="text"/>
          Sort by:
          <select >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </div>
        <div className="col-md-10">
          <ul className="phones">
          <li className="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" className="thumb"><img src="/images/phones/motorola-xoom-with-wi-fi.0.jpg" /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>
          <li className="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" className="thumb"><img src="/images/phones/motorola-xoom-with-wi-fi.0.jpg" /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>
          <li className="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" className="thumb"><img src="/images/phones/motorola-xoom-with-wi-fi.0.jpg" /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>

        </ul>
        </div>
      </div>

    )

  }

});

module.exports = PhoneCatWrapper;
