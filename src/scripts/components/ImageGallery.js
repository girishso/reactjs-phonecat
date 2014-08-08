/** @jsx React.DOM */

var ImageGallery = React.createClass({
  render: function() {
    var images = this.props.images.map(function(image_path, i) {
      return <li key={i}><img src={image_path} /> </li>;
    });

    return (
      <ul className="phone-thumbs">
        {images}
      </ul>
    );
  }
});

module.exports = ImageGallery;
