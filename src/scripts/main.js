/** @jsx React.DOM */

// Bring in jQuery and React as a Bower component in the global namespace
require("script!react/react-with-addons.js")
require("script!jquery/jquery.js")
require('script!react-router/dist/react-router.js')

var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var PhoneCatWrapper = require("./components/PhoneCatWrapper.js")
var PhoneDetailsWrapper = require("./components/PhoneDetailsWrapper.js")

App = React.createClass({
  render: function(){
    return(
      <div>
        <ul>
          <li><Link to="phones">Home</Link></li>
        </ul>
        <this.props.activeRouteHandler/>
      </div>
    )
  }
})

React.renderComponent(
  (<Route handler={App}>
      <Route name="phones" handler={PhoneCatWrapper}/>
      <Route name="phone" path="/phones/:phoneId" handler={PhoneDetailsWrapper} />
    </Route>), document.getElementById('app'));
