/** @jsx React.DOM */
var ImageGallery = require("./ImageGallery.js");

var PhoneDetails = React.createClass({
  checkmark: function(truthy) {
    if (truthy) {
      return String.fromCharCode(10003);
    } else {
      return String.fromCharCode(10008);
    }
  },

  render: function() {
    var phone = this.props.phone;
    var dimensions = phone.sizeAndWeight.dimensions.map(function(dimension, i) {
      return <dd key={i}>{ dimension }</dd>;
    });
    
    return (
      <section id="main">
        <div className="phone-images">
          <img ref="phone_image" src={ this.props.phone.images[0]} className="phone" />
        </div>
        <h1>{phone.name}</h1>
        <p>{phone.description}</p>

        <ImageGallery images={phone.images} />

        <ul className="specs">
          <li>
              <span>Availability and Networks</span>
              <dl>
                  <dt>Availability</dt>
                  <dd>{ phone.availability }</dd>
              </dl>
          </li>

          <li>
              <span>Battery</span>
              <dl>
                  <dt>Type</dt>
                  <dd>{ phone.battery.type }</dd>
                  <dt>Talk Time</dt>
                  <dd>{ phone.battery.talkTime }</dd>
                  <dt>Standby time (max)</dt>
                  <dd>{ phone.battery.standbyTime }</dd>
              </dl>
          </li>

          <li>
              <span>Storage and Memory</span>
              <dl>
                  <dt>RAM</dt>
                  <dd>{ phone.storage.ram }</dd>
                  <dt>Internal Storage</dt>
                  <dd>{ phone.storage.flash }</dd>
              </dl>
          </li>

          <li>
              <span>Connectivity</span>
              <dl>
                  <dt>Network Support</dt>
                  <dd>{ phone.connectivity.cell }</dd>
                  <dt>WiFi</dt>
                  <dd>{ phone.connectivity.wifi }</dd>
                  <dt>Bluetooth</dt>
                  <dd>{ phone.connectivity.bluetooth }</dd>
                  <dt>Infrared</dt>
                  <dd>{ this.checkmark(phone.connectivity.infrared) }</dd>
                  <dt>GPS</dt>
                  <dd>{ this.checkmark(phone.connectivity.gps) }</dd>
              </dl>
          </li>

          <li>
              <span>Android</span>
              <dl>
                  <dt>OS Version</dt>
                  <dd>{ phone.android.os }</dd>
                  <dt>UI</dt>
                  <dd>{ phone.android.ui }</dd>
              </dl>
          </li>

          <li>
              <span>Size and Weight</span>
              <dl>
                  <dt>Dimensions</dt>
                    { dimensions }
                  <dt>Weight</dt>
                  <dd>{ phone.sizeAndWeight.weight }</dd>
              </dl>
          </li>

          <li>
              <span>Display</span>
              <dl>
                  <dt>Screen size</dt>
                  <dd>{ phone.display.screenSize }</dd>
                  <dt>Screen resolution</dt>
                  <dd>{ phone.display.screenResolution }</dd>
                  <dt>Touch screen</dt>
                  <dd>{ this.checkmark(phone.display.touchScreen) }</dd>
              </dl>
          </li>

          <li>
              <span>Hardware</span>
              <dl>
                  <dt>CPU</dt>
                  <dd>{ phone.hardware.cpu }</dd>
                  <dt>USB</dt>
                  <dd>{ phone.hardware.usb }</dd>
                  <dt>Audio / headphone jack</dt>
                  <dd>{ phone.hardware.audioJack }</dd>
                  <dt>FM Radio</dt>
                  <dd> { this.checkmark(phone.hardware.fmRadio) }</dd>
                  <dt>Accelerometer</dt>
                  <dd>{ this.checkmark(phone.hardware.accelerometer) }</dd>
              </dl>
          </li>

          <li>
              <span>Camera</span>
              <dl>
                  <dt>Primary</dt>
                  <dd>{ phone.camera.primary }</dd>
                  <dt>Features</dt>
                  <dd>{ phone.camera.features.join(', ') }</dd>
              </dl>
          </li>

          <li>
              <span>Additional Features</span>
              <dd>{ phone.additionalFeatures }</dd>
          </li>

          <li></li>
        </ul>
      </section>
    );
  }
});

module.exports = PhoneDetails;
