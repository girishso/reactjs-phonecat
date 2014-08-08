/** @jsx React.DOM */
var PhoneDetails = require("./PhoneDetails.js")

var PhoneDetailsWrapper = React.createClass({
  getInitialState: function() {
    return {
      phone: {
        images: [],
        battery: {},
        storage: {},
        connectivity: {},
        android: {},
        sizeAndWeight: {
          dimensions: []
        },
        display: {},
        hardware: {},
        camera: {
          features: []
        }
      }
    };
  },


  componentDidMount: function() {
    var url;
    url = "phones/" + this.props.params.phoneId + ".json";
    return $.getJSON(url, (function(data) {
      data.phone_image = data.images[0];
      return this.setState({
        phone: data
      });
    }).bind(this));
  },

  render: function() {
    return <PhoneDetails phone={this.state.phone} />
  }

});

module.exports = PhoneDetailsWrapper;
